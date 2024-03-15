import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthServiceService, private router: Router) {} // Inject the AuthServiceService

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthServiceService
    this.router.navigateByUrl('/signin'); // Navigate to the signin path after logout
  }
}
