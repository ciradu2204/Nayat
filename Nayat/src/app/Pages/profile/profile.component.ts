import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
 
 
    
  constructor( ) { }
  
  
  showPopup() {
     
     document.getElementById('overlay').style.display="block";
     document.getElementById('contacts').style.display="none";
     
   }

   closePopup(){
 
     document.getElementById('overlay').style.display="none";
     document.getElementById('contacts').style.display="block";
   }
 
  ngOnInit() {}

}
