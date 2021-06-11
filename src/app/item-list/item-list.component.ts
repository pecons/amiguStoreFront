import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../core/models/item.model';
import { TransactionService } from '../core/services/transaction.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  queryparam :string = '';
  itemList : Array<Item> = [];

  constructor(public post : TransactionService,
              route:ActivatedRoute) {    

    route.queryParams.subscribe(params =>{      
        this.queryparam=params.filterby
        this.post.get('items').subscribe((res:Array<any>)=>{
          if(this.queryparam!=undefined){
            this.itemList=res.filter(value=>value.categories.includes(this.queryparam));
          }else{
            this.itemList=res;
          }         
          console.log(this.itemList);
        });      
    });

   }

  ngOnInit(): void {    

  }

  enviarMensaje(item:Item){
    window.open(`https://api.whatsapp.com/send?phone=+57 3013448093&text=Hola, Estoy interesado en comprar un/a ${item.value}`, '_blank');
  }


}
