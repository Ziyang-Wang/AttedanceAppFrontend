import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service'
import { LoginRely } from '../shared/others/type'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup
  msg: string = ''
  loginLoading:boolean = false;
 
  constructor(
    private authService: AuthService,
    public formBuilder: FormBuilder,
    private router: Router,
  ) { 
    this.initFormBuilder() 
  }

  ngOnInit(): void {
  }

  loginUser() {
    this.loginLoading = true;
    this.authService.login(this.form.value).subscribe((data: LoginRely)=>{
      if(data.data != null ) {
        this.msg = ''
        localStorage.setItem('session', JSON.stringify(data));
        this.router.navigate(['dashboard/home'], {state: {data: data}})
      }else{
        this.msg = data.msg
      }
      this.loginLoading = false
    })
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

}
