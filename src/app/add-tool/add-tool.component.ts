import { Component } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { ToolService } from '../services/tool.service.ts.service';

@Component({
  selector: 'app-add-tool',
  templateUrl: './add-tool.component.html',
  styleUrls: ['./add-tool.component.css']
})
export class AddToolComponent {

  tool = {
    toolId: null, 
    price:0,
    toolName: '',
    description: '',
    category: {
      categoryName: ''
    },
    imageData: '' // Base64 encoded image data
  };

  constructor(private toolService: ToolService,
    private toastr: ToastrService
) { }

  onSubmit(): void {

    this.tool.imageData = this.tool.imageData.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
    // Add the tool using the tool service
    this.toolService.addTool(this.tool).subscribe(
      
      (addedTool) => {
        console.log('Tool added successfully:', addedTool);
        this.toastr.success('Tool added successfully!', 'Success', {
          timeOut: 10000,
          progressBar: true,
          positionClass: 'toast-top-center',
          closeButton: true,
          tapToDismiss: false,
          extendedTimeOut: 1000,
          enableHtml: true,
          toastClass: 'ngx-toastr custom-toast-success',
        });
        this.clearForm();
      },
      (error) => {
        console.error('Error adding tool:', error);
        this.toastr.error('Error adding tool. Please try again.', 'Error');
      }
    );
    console.log(this.tool)
  }

  onFileChange(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Set the imageData with the base64 encoded image data
        this.tool.imageData = reader.result as string;
      };
    }
  }

  clearForm(): void {
    // Clear the form fields
    this.tool.toolName = '';
    this.tool.description = '';
    this.tool.category.categoryName = '';
    this.tool.imageData = '';
    this.tool.price=0;
  }
}
