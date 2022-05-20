import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LpService } from 'src/app/service/lp.service';
import { first } from 'rxjs/operators';

// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { CandidateService } from '../../services/candidate.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  message: any;
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private apiService: LpService) { }
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
   }

   onSubmit(){
     console.log(this.loginForm.value);
     if (this.loginForm.invalid) {
      return;
    }

     const loginData = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

     this.apiService.login(loginData).subscribe((data: any) => {
      
      this.message = data.message;
     // console.log(data.token);
      if(data.token) {
          window.localStorage.setItem('token', data.token);
          this.router.navigate(['dash']);
       } else {
         this.invalidLogin = true;
        // alert('a' + data.message);
       }
     });
   }
  }