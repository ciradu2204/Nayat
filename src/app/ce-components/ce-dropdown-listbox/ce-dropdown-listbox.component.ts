import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ce-dropdown-listbox',
  templateUrl: './ce-dropdown-listbox.component.html',
  styleUrls: ['./ce-dropdown-listbox.component.scss']
})
export class CeDropdownListboxComponent implements OnInit {
  @Input() list: any;
  
  constructor() { }

  ngOnInit() {}
 
}
