import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  interval :number = 6000;
  mode = new FormControl('over');
  slides = [{'image': 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/hogartotal/o/ovillo-de-lana-juguete-seguro-para-un-gato-1.jpg'}, {'image': 'https://thumbs.dreamstime.com/b/gato-con-la-bola-de-lana-9058001.jpg'}];

  constructor() { }

  ngOnInit(): void {
  }

}
