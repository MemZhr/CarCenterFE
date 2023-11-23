import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm:any;
externalErrorMsg: string | undefined;
  constructor(private auth:AuthService,private formBuilder: FormBuilder,private router: Router ) { 

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],      
      usernameForm: new FormGroup("", [Validators.required]),
      passwordForm: new FormGroup("", [Validators.required]),
    });

  }





submitLogin(){

  this.auth.login(this.loginForm.value.username,this.loginForm.value.password).subscribe({
    next:(result)=>{
      console.log("Login successful");
      console.log(result.access_token)
      alert("successful Login  !")



      localStorage.removeItem("authToken");
          localStorage.removeItem("username")
          localStorage.setItem("authToken", result.access_token);
          localStorage.setItem("username", this.loginForm.value.username);

          this.router.navigate(["/home"])
      
    },
    error: (error) => {
      console.log(error, error.status);
      if (error.status === 403) {
        this.externalErrorMsg = "Wrong username/password";
      }
    },
  })
}

}