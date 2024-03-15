import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profil-admin',
  templateUrl: './profil-admin.component.html',
  styleUrls: ['./profil-admin.component.css']
})
export class ProfilAdminComponent {

  user: UserModel | undefined;

  
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // Assuming you have the userId stored somewhere (e.g., in localStorage)
    const userId = parseInt(localStorage.getItem('userId') || '');
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: UserModel) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }
}
