import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-users-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-create.component.html',
  styleUrl: './users-create.component.scss'
})
export class UsersCreateComponent {
userForm!: FormGroup;

constructor (
  private userService: UserService
){
  this.userForm = new FormGroup({
    firstName: new FormControl(''),  
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    skill: new FormControl(''),
}

  );

}
  onSubmit(){
    console.log(this.userForm.value);
    this.userService.createUser(this.userForm.value).subscribe({
      next: (resp) => {
        console.log(resp, 'User created successfully');
        this.userForm.reset();
      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
} 

}
