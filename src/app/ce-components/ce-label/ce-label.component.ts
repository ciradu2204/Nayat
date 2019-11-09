import { CommonService } from '../common-services.service';
import { Component, OnInit, Input, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

export type color='primary'|'secondary'|'tertiary'|'success'|'warning'|'danger'|'dark'|'medium'|'light';


@Component({
  selector: 'ce-label',
  templateUrl: './ce-label.component.html',
  styleUrls: ['./ce-label.component.scss'],
  providers:[ CommonService ],
  preserveWhitespaces:false,
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush,
  host:{
    'class':'label'
  }
  
})
export class CeLabelComponent implements OnInit {
private _underline:boolean;
@Input() color:color='dark';
@Input() 
get underline():boolean{
  return this._underline;
}
set underline(value:boolean){
  this._underline=""+value!=='false';
}

private element:HTMLElement=this.elementRef.nativeElement;
isNotNull(value:any):boolean{
  return (typeof(value)!=='undefined' && value !==null)
}
  constructor(public elementRef:ElementRef,public render:Renderer2,public updateClassService:CommonService) { }
  
  setClass():void{
    const classMap = {}
    if(this.isNotNull(this.color)){
    classMap ['label-primary']=this.color==='primary'; 
    classMap ['label-secondary']=this.color==='secondary';
    classMap ['label-tertiary']=this.color==='tertiary';
    classMap ['label-success']=this.color==='success';
    classMap ['label-warning']=this.color==='warning';
    classMap ['label-danger']=this.color==='danger';
    classMap ['label-dark']=this.color==='dark';
    classMap ['label-medium']=this.color==='medium';
    classMap ['label-light']=this.color==='light';
    classMap ['label-underline']=this.underline;
    }
    this.updateClassService.updateClass(this.element,classMap);
  }

  ngOnInit() {
    this.setClass();
  }

}


