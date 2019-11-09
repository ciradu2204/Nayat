import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { CeCollapsePanelComponent } from './ce-collapse-panel.component';

@Component({
  selector: 'ce-collapse',
  templateUrl: './ce-collapse.component.html',
  changeDetection :ChangeDetectionStrategy.OnPush,
  encapsulation : ViewEncapsulation.None,
  styles: [ 
    `ce-collapse {
      display :block;
    }`
   ]
})
export class CeCollapseComponent implements OnInit {

  private listOfCeCollapsePanelComponent : CeCollapsePanelComponent[] =[];
  private __ceAccordion:Boolean = false;
  private __ceBordered:Boolean = true;
  // @Input() ceAccordion = false;
  @Input() 
  
  public get ceAccordion() {
    return this.__ceAccordion;
  }
  
  public set ceAccordion(value) {
    this.__ceAccordion = value;
  }

  @Input()

  public get ceBordered() {
    return this.__ceBordered;
  }

  public set ceBordered(value){
    this.__ceBordered = value;
  }
  

  constructor() { }

  addPanel(value : CeCollapsePanelComponent):void{
    this.listOfCeCollapsePanelComponent.push(value);
  }

  removePanel(value : CeCollapsePanelComponent):void{
    this.listOfCeCollapsePanelComponent.splice(this.listOfCeCollapsePanelComponent.indexOf(value), 1);
  }

  click(collapse: CeCollapsePanelComponent):void{
    if(this.__ceAccordion && !collapse.ceActive){
      this.listOfCeCollapsePanelComponent.filter(item => item !== collapse).forEach(item =>{
        if(item.ceActive){
          item.ceActive =false;
          item.ceActiveChange.emit(item.ceActive);
          item.markForCheck();
        }
      });
    }
    collapse.ceActive = !collapse.ceActive;
    collapse.ceActiveChange.emit(collapse.ceActive);
  }
  ngOnInit() {
  }

}
