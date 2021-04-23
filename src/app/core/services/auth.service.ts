import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { TransactionService } from './transaction.service';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
    private post: TransactionService
  ) {}

  login(user: User) {
    this.post.post('login',user).subscribe((res)=>{
      if(res == true){
        this.loggedIn.next(true);
        this.router.navigate(['/admin']);
      }
      else{
        console.log('Usuario o COntraseña incorrectos');
        //this.logout();        
      }
    },
    (err)=>{
      console.log(err);
      this.logout();
    });    
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
}