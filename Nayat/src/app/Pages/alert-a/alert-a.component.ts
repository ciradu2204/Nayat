import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-a',
  templateUrl: './alert-a.component.html',
  styleUrls: ['./alert-a.component.scss'],
})
export class AlertAComponent implements OnInit {
 
  constructor() { }
  id: number;
  name: string;
  age: number;
  country: string;
  address: string;
  
  ngOnInit() {
    this.id= 345674;
    this.name= 'Tom';
    this.age= 25;
    this.address= '1357 Randall Drive, Kilauea,Hawaii';

  }

}