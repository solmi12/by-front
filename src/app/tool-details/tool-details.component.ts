import { Component, OnInit } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ActivatedRoute } from '@angular/router';

import { UserCartItemsService } from '../services/user-cart-items.service';
import { UserModel } from '../models/user.model';

import { UserServiceService } from '../services/user-service.service';
import { ToolService } from '../services/tool.service.ts.service';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.component.html',
  styleUrls: ['./tool-details.component.css']
})
export class ToolDetailsComponent implements OnInit {
  tool: Tool | undefined;
  user: UserModel | undefined;

  quantity: number = 1;
  totalPrice: number = 0;
  showPopup: boolean = false; // Added property to control pop-up visibility

  constructor(
    private route: ActivatedRoute,
    private toolService: ToolService,
    private userCartItemsService: UserCartItemsService,
    private userService: UserServiceService,
  ) { }

  ngOnInit(): void {
    const toolId = this.route.snapshot.params['toolId'];

    this.toolService.getToolById(toolId).subscribe(
      (tool) => {
        this.tool = tool;
        console.log('Tool details:', this.tool);
      },
      (error) => {
        console.error('Error fetching tool details:', error);
      }
    );

    const userId = parseInt(localStorage.getItem('userId') || '');

    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user) => {
          this.user = user;
          console.log('User details:', this.user);
        },
        (error) => {
          console.error('Error fetching user details:', error);
        }
      );
    }
  }

  calculateTotalPrice(): void {
    if (this.tool) {
      this.totalPrice = this.quantity * (this.tool.totalPrice || this.tool.price); // Adjusted calculation
    }
  }

  addToCart(): void {
    if (this.user && this.tool) {
      const userDTO = {
        userId: this.user.userId,
        firstName: this.user.firstname,
        lastName: this.user.lastName,
        email: this.user.email
      };

      const toolDTO = {
        toolId: this.tool.toolId || null,
        toolName: this.tool.toolName,
        description: this.tool.description,
        price: this.tool.price,
        totalPrice: this.tool.totalPrice
      };

      const requestData = {
        userDTO: userDTO,
        toolDTO: toolDTO,
        quantity: this.quantity
      };

      this.userCartItemsService.buyTool(requestData).subscribe(
        (response: string) => {
            if (response === 'Tool(s) added to cart successfully') {
                console.log('Tool added to cart successfully');
                this.showPopup = true; // Show the pop-up
                setTimeout(() => {
                    console.log('Hiding pop-up');
                    this.showPopup = false; // Hide the pop-up after 3 seconds
                }, 3000);
            }
        },
        (error) => {
            console.error('Error adding tool to cart:', error);
        }
    );
    
    }
  }
}
