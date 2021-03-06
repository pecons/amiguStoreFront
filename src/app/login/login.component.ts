import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;                    
  private formSubmitAttempt: boolean; 

  constructor(
    private fb: FormBuilder,         
    private authService: AuthService 
  ) {    
    this.form = this.fb.group({    
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.formSubmitAttempt = false    

  }

  ngOnInit() {
  }

  isFieldInvalid(field: string) { 
    return (
      (!this.form.get(field)!.valid && this.form.get(field)!.touched) ||
      (this.form.get(field)!.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value); 
    }
    this.formSubmitAttempt = true;             
  }

}
