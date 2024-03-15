import { Invoice } from "./Invoice.model";
import { UserModel } from "./user.model";

export interface UserAndInvoiceDTO {
    userDTO: UserModel;
    invoiceDto: Invoice;
  }
  