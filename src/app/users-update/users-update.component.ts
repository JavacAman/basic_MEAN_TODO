import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../service/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-update',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './users-update.component.html',
  styleUrl: './users-update.component.scss'
})
export class UsersUpdateComponent {
updateUserForm!: FormGroup;
data:any |undefined;
constructor (
  private userService: UserService,
  private route: ActivatedRoute
){

  const id = this.route.snapshot.paramMap.get('id');
  if (id) {
    this.getUserData(id); 
  }

  this.updateUserForm = new FormGroup({
    firstName: new FormControl(''),  
    lastName: new FormControl(''),
    email: new FormControl(''),
    contact: new FormControl(''),
    skill: new FormControl(''),
}

  );

}
  onSubmit(){
    console.log(this.updateUserForm.value);
    const id = this.route.snapshot.paramMap.get('id');
    this.updateUserForm.value.id = id; 
    this.userService.updateUser(this.updateUserForm.value).subscribe({
      next: (resp) => {
        alert('Updated successfully');      },
      error: (error) => {
        console.error('Error creating user:', error);
      }
    });
} 

getUserData(id:any){
 this.userService.getUserById(id).subscribe({
  next: (resp) => {
   console.log(resp, 'User data fetched successfully');
   this.data = resp;

    this.updateUserForm = new FormGroup({
    firstName: new FormControl(this.data.result.firstName),  
    lastName: new FormControl(this.data.result.lastName ),
    email: new FormControl(this.data.result.email ),
    contact: new FormControl(this.data.result.contact ),
    skill: new FormControl(this.data.result.skill ),
})
} ,
  error: (error) => {
    console.error('Error fetching user data:', error);
  }
 });
}

}
