import { CartItem } from "./CartItem.model";
import { UserCartItems } from "./UserCartItems.model";

export interface UserCartItemsResponse {
    userCartItems: UserCartItems; // Define the type of UserCartItems here
    cartItems: CartItem[];
  }