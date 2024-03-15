import { Component } from '@angular/core';
import { UserModel } from '../models/user.model';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  user: UserModel | undefined;

  
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    const userId = parseInt(localStorage.getItem('userId') || '');
    if (userId) {
      this.userService.getUserById(userId).subscribe(
        (user: UserModel) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user profile:', error);
        }
      );
    }
  }
}
