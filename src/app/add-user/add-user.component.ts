import { Component, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: any = {};

  @ViewChild('fileInput', { static: false }) fileInput!: any;

  constructor(private registerService: UserServiceService, private toastr: ToastrService) {}

  onImageChange(event: any): void {
    const input = event.target as HTMLInputElement;
    const file = input.files![0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        this.user.imageData = event.target!.result as string; // Update to match your model property
      };
      reader.readAsDataURL(file);
    }
  }

  register(form: NgForm) {
    const file: File = this.fileInput.nativeElement.files[0];

    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.birthday = form.value.birthday;
    this.user.phoneNumber = form.value.phoneNumber;
    this.user.role = form.value.role;

    if (file) {
      this.onImageChange({ target: this.fileInput.nativeElement });
    }

    this.registerService.addUser(this.user).subscribe(
      () => {
        this.toastr.success('User added successfully', '', { positionClass: 'toast-center-center' }); // Display success message
        form.reset(); // Reset form after successful registration
      },
      (error) => {
        console.error('Error registering user:', error);

        if (error.error && typeof error.error === 'string') {
          this.toastr.error(error.error); // Display error message
        } else {
          this.toastr.error('An error occurred while registering the user.'); // Display error message
        }
      }
    );
  }
}
