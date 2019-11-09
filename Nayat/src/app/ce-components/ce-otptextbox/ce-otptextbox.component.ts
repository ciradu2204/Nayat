import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ce-otptextbox',
  templateUrl: './ce-otptextbox.component.html',
  styleUrls: ['./ce-otptextbox.component.scss'],
  host:{
    'class':'otp input'
  }
})
export class CeOtptextboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
