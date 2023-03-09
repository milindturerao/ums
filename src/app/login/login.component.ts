import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData =new FormGroup({
    email: new FormControl('',[Validators.required]),
    pwd: new FormControl('',[Validators.required]),
 

  });

  login(){}

  get pwd(){
    return this.loginData.get('pwd')
  }
  get email(){
    return this.loginData.get('email')
  }

}
