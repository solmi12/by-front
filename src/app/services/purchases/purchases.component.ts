import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem.model';
import { UserCartItemsService } from '../user-cart-items.service';
import { UserModel } from 'src/app/models/user.model';
import { UserServiceService } from '../user-service.service';
import { UserCartItemsResponse } from 'src/app/models/UserCartItemsResponse.model';
import { Invoice } from 'src/app/models/Invoice.model';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  cartItems: CartItem[] = [];
  currentUser: UserModel | null = null;
  userCartItems: any;
  showPopup: boolean = false; // Flag to control pop-up visibility
  constructor(
    private userCartItemsService: UserCartItemsService,
    private userService: UserServiceService
  ) { }

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('userId') || '');
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: UserModel) => {
          this.currentUser = user;
          if (user && user.email) {
            this.getCartItems(user.email); // Pass the user's email here
          } else {
            console.error('User information is missing or invalid.');
          }
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }
  
  deleteItemFromCart(cartItemId: number): void {
    const userId = parseInt(localStorage.getItem('userId') || '');
    if (this.currentUser && this.currentUser.email) {
      this.userCartItemsService.deleteProductFromCart(userId, cartItemId)
        .subscribe(
          (response: string) => {
            console.log('Item deleted successfully');
            // Show the pop-up
            this.showPopup = true;
            // Hide the pop-up after 3 seconds
            setTimeout(() => {
              console.log('Hiding pop-up');
              this.showPopup = false;
            }, 3000);
            // Refresh cart items after deletion
            this.getCartItems(this.currentUser!.email);
          },
          (error) => {
            console.error('Error deleting item from cart:', error);
          }
        );
    } else {
      console.error('User information is missing or invalid.');
    }
  }
  
  getCartItems(email: string): void {
    this.userCartItemsService.getCartItems(email).subscribe(
      (response: UserCartItemsResponse) => {
        this.userCartItems = response.userCartItems;
        this.cartItems = response.cartItems;
        console.log('User Cart Items:', this.userCartItems);
        console.log('Cart Items:', this.cartItems);
      },
      (error) => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  confirmCreateInvoice(): void {

    if (confirm('Are you sure you want to create the invoice?')) {
      this.createInvoice(); // Call createInvoice method if the user confirms
    }
  }

  createInvoice(): void {
    const invoiceDto: Invoice = {
      name: this.currentUser?.firstname,
      email: this.currentUser?.email,
      numPohne: this.currentUser?.phoneNumber,
      price: this.userCartItems.totalOfTotalPrice
    };
    
    const userAndInvoiceDTO = {
      userDTO: this.currentUser!,
      invoiceDto: invoiceDto
    };
  
    this.userCartItemsService.deleteAllAndCreateInvoice(userAndInvoiceDTO)
      .subscribe(
        (response: string) => {
          console.log('Invoice created successfully:', response);
          this.getCartItems(this.currentUser!.email);
        },
        (error) => {
          console.error('Error creating invoice:', error);
          // Handle error scenario
        }
      );
  }
}
