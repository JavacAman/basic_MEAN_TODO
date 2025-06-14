import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {
  userslist : any | undefined;
  constructor(
    private userService: UserService
  ) { 
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsersList().subscribe({
      next: (resp) => {
        console.log(resp,'response');
        this.userslist = resp;
        
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }
}
