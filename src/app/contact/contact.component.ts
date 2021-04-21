import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TransactionService } from '../core/services/transaction.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactFormGroup: FormGroup;
  disableForm : boolean = false; 

  constructor(private builder: FormBuilder,
    private http: HttpClient,
    private post: TransactionService,
    private snackBar: MatSnackBar)
               {  
    this.contactFormGroup = this.builder.group(
      {
        name:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        message:['', Validators.required],
      }
    );

   }

  ngOnInit(): void {
    this.post.sayHi();
  }
  

  getErrorMessage(control : AbstractControl) {
    if (control.hasError('required')) {
      return 'Debes ingresar un valor';
    }
    else if (control.hasError('email')){
      return 'Por favor introduzca un correo válido.';

    }
    else return '';
  }

  makeQuery(){
    this.disableForm=true;
    this.http.post('api/mensajes',this.contactFormGroup.value).subscribe(
    (res) =>{
      this.disableForm=false;
      this.snackBar.open("Mensaje enviado satisfactoriamente.","cerrar", {
        duration: 5000,
      });
      this.contactFormGroup.reset()
    },      
    (err)=>{
      console.log(err.message);
      this.disableForm=false;
    });
  }

}
