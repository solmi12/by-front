import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { ToolComponent } from './services/tool/tool.component';
import { ListToolsAdminComponent } from './list-tools-admin/list-tools-admin.component';
import { PromotionComponent } from './promotion/promotion.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { LostPromotionComponent } from './lost-promotion/lost-promotion.component';
import { ToolDetailsComponent } from './tool-details/tool-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SginInComponentComponent } from './sgin-in-component/sgin-in-component.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { PurchasesComponent } from './services/purchases/purchases.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"add-tools",component:AddToolComponent},
  {path:"tools",component:ToolComponent},
  {path:"list-tools-admin",component:ListToolsAdminComponent},
  {path: "promotion/:toolId",component:PromotionComponent},
  {path:"admin-home",component:DashbordAdminComponent},
  {path:"list-promotions",component:LostPromotionComponent},
  { path: 'tools/:toolId', component: ToolDetailsComponent },
  {path:"new-user",component:AddUserComponent},
  {path:"all-users",component:UserListComponent},
  {path:"signin",component:SginInComponentComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"profil",component:ProfilComponent},
  {path:"admin-profil",component:ProfilAdminComponent},
  {path:"purchases",component:PurchasesComponent},
  {path:"List-Invoices",component:ListInvoicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
