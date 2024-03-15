import { publishFacade } from "@angular/compiler";

export class UserModel{
  

    constructor(
      public userId:number,
      public firstname: string,
      public lastName: string,
      public email: string,
      public birthday: string,
      public imageData: string,
      public password:string,
      public  phoneNumber: number,
      public role: string

   
    ) {}
 }
