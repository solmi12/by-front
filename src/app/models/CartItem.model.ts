import { Tool } from "./tool.model";
import { UserModel } from "./user.model";

export interface CartItem {
  cartId: number;
    tool: Tool;
    user: UserModel;
    quantity: number;
    totalPriceCart:number;
  }