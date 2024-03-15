import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddToolComponent } from './add-tool/add-tool.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './services/tool/tool.component';
import { NavbarComponent } from './services/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListToolsAdminComponent } from './list-tools-admin/list-tools-admin.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { PromotionComponent } from './promotion/promotion.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { LostPromotionComponent } from './lost-promotion/lost-promotion.component';
import { CommonModule } from '@angular/common';
import { ToolDetailsComponent } from './tool-details/tool-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { SginInComponentComponent } from './sgin-in-component/sgin-in-component.component';
import { JwtModule } from '@auth0/angular-jwt';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';
import { PurchasesComponent } from './services/purchases/purchases.component';
import { InvoiceserviceComponent } from './services/invoiceservice/invoiceservice.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
@NgModule({
  declarations: [
    AppComponent,
    AddToolComponent,
    HomeComponent,
    ToolComponent,
    NavbarComponent,
    ListToolsAdminComponent,
    ConfirmationComponent,
    ConfirmDialogComponent,
    PromotionComponent,
    DashbordAdminComponent,
    SidebarAdminComponent,
    NavbarAdminComponent,
    LostPromotionComponent,
    ToolDetailsComponent,
    AddUserComponent,
    UserListComponent,
    SginInComponentComponent,
    InscriptionComponent,
    ProfilComponent,
    ProfilAdminComponent,
    PurchasesComponent,
    InvoiceserviceComponent,
    ListInvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center' // Set the position to center
    }),
    MatDialogModule,
    MatIconModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
