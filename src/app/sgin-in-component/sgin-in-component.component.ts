import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthServiceService } from '../auth-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sgin-in-component',
  templateUrl: './sgin-in-component.component.html',
  styleUrls: ['./sgin-in-component.component.css']
})
export class SginInComponentComponent {

  email!: string;
  password!: string;

  
  constructor(private jwtHelper: JwtHelperService, private route: Router, private loginService: AuthServiceService, private toastr: ToastrService) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        const userId = response.idUser;
        const decodedToken = this.jwtHelper.decodeToken(token);
        this.loginService.updateAuthState(true, decodedToken.role, decodedToken.sub);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId.toString());

    

        // Navigate based on the user's role
        if (decodedToken.role === 'USER') {
          this.route.navigate(["tools"]);
        } else if (decodedToken.role === 'ADMIN') {
          this.route.navigate(["admin-home"]);
        } else {
        
        }
      },
      error => {
        if (error.status === 401) {
          this.toastr.error('Invalid credentials. Please check your email and password.');
        } else if (error.status === 409) {
          this.toastr.error('Account already exists.');
        } else {
          this.toastr.error('An unknown error occurred. Please try again later.');
        }
      }
    );
  }
}
