import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'ce-checkbox',
  templateUrl: './ce-checkbox.component.html',
  styleUrls: ['./ce-checkbox.component.scss'],
  host:{
    'class':'checkbox'
  }
})
export class CeCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
