
import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-ce-floating-button',
templateUrl: './ce-floating-button.component.html',
styleUrls: ['./ce-floating-button.component.scss'],
})
export class CeFloatingButtonComponent implements OnInit {

constructor() { }

ShowButtons() {
var circleButton = document.getElementById("CircleButton");
var triggerButton= document.getElementById("triggerButton");
triggerButton.style.display="none";
circleButton.style.display="none";




}

closeButtons(){
var circleButton = document.getElementById("CircleButton");
var triggerButton= document.getElementById("triggerButton");
var Buttons=document.getElementById("Buttons"); 
triggerButton.style.display="block";
circleButton.style.display="block";
Buttons.style.display="none";


 


}
ShowButtons2(){
  
    document.getElementById("Buttons").style.display="block";
    document.getElementById("CircleButton").style.display="none";
    document.getElementById("triggerButton").style.display="none";
    document.getElementById('logoImage').style.display="none";
 
}
CloseButtons2(){
    document.getElementById("Buttons").style.display="none";
  
    document.getElementById('logoImage').style.display="block";
}

ngOnInit() {}
}