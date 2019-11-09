import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceptafter-chat-',
  templateUrl: './acceptafter-chat.component.html',
  styleUrls: ['./acceptafter-chat.component.scss'],
})
export class AcceptAfterChatOptionComponent implements OnInit {

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
    this.address= '1357 Randall Drive, Kilauea';
    this.country='Hawaii';

  }
}