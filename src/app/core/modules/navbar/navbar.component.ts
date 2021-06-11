import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category.model';
import { AuthService } from '../../services/auth.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menuList: Array<Category> = [];
  objectKeys = Object.keys;

  constructor(public authService: AuthService,
              public post : TransactionService) {  


                
                
               }

  ngOnInit(): void {

    this.post.get('categories').subscribe((res)=>{
      this.menuList = this.menuList.concat(res);
    });
  }

  replaceUnderScores(value : string){
    return value.split('_').join(' ');

  }

  changeLanguage(value:any){
    this.post.setLang(value);
    console.log(this.post.getLang());
  }
}
