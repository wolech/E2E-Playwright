import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {UserCrudOperationsService} from './../user-crud-operations.service';

@Component({
  selector: 'app-login',
  imports: [HttpClientModule,CommonModule, FormsModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatCardModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserCrudOperationsService]
})
export class LoginComponent implements OnInit {
  user = {
    name: '',
    password: '',
    errorMessage:'',
    successMessage:''
  };  

  constructor(private router: Router, private userService:UserCrudOperationsService) {}

  ngOnInit(): void {
    // Initialization logic here
  }
  
  onSubmit(form: any) {
    if (form.valid) {      
      //login if username and password matches based on crud operations service
      this.userService.loginUser(this.user.name, this.user.password).subscribe((data) => {
        console.log(data);
        if (data.length > 0) {
          alert('Login Successful');
          this.user.errorMessage = '';
          this.router.navigate(['/customer-update'],{ queryParams: { username: this.user.name } });
        } else {
          this.user.errorMessage = 'Invalid Username or Password';
          this.user.successMessage = '';

    }
  });
}
  }
  
  
  onReset() {
    this.user = {
      name: '',
      password: '',
      errorMessage: '',
      successMessage: ''
    };
  }

}
    
  

