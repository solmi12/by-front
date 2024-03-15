import { CartItem } from "./CartItem.model";
import { UserModel } from "./user.model";

export interface UserCartItems {
    userCartId?: number | null;
    cartItems: CartItem[];
    totalOfTotalPrice: number;
    user: UserModel;
}