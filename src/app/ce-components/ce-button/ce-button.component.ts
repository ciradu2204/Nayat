import { CommonService } from './../common-services.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, ElementRef, Renderer2 } from '@angular/core';

export type color='primary'|'secondary'|'tertiary'|'success'|'warning'|'danger'|'dark'|'medium'|'light';

@Component({
  selector: '[ce-button]',
  templateUrl: './ce-button.component.html',
  providers:[CommonService],
  preserveWhitespaces:false,
  changeDetection:ChangeDetectionStrategy.OnPush,
  encapsulation:ViewEncapsulation.None
})
export class CeButtonComponent implements OnInit {
  private _btnBlock:boolean;
  private _btnLarge:boolean;
  private _btnSmall:boolean;
  private _fabButton:boolean;
  private _miniFabButton:boolean;
  private element=this.elementRef.nativeElement;
  private _round:boolean;
  @Input()
  get round():boolean{return this._round;}
  set round(value:boolean){this._round=""+value!=='false';}
  @Input() color:color;
  @Input()
  get btnBlock():boolean{return this._btnBlock;}
  set btnBlock(value:boolean){ this._btnBlock=""+ value !== 'false'; }
  @Input() btnOutline:color;
  @Input()
  get btnLarge():boolean{ return this._btnLarge; }
  set btnLarge(value:boolean){ this._btnLarge=""+value!=='false'; }
  @Input()
  get btnSmall():boolean{ return this._btnSmall; }
  set btnSmall(value:boolean){ this._btnSmall=""+value!=='false'; }
  @Input()
  get fabButton():boolean{ return this._fabButton; }
  set fabButton(value:boolean){ this._fabButton=""+value!=='false'; }
  @Input()
  get miniFabButton():boolean{ return this._miniFabButton; }
  set miniFabButton(value:boolean){ this._miniFabButton=""+value!=='false' }

  constructor(private elementRef:ElementRef, private renderer:Renderer2, private updateClassService:CommonService) { }
  isNotNull(value:any):boolean{
    return (typeof(value)!=='undefined' && value !==null)
  }
  setClassMap():void{
    const classMap={
      [`btn`]:true,
      [`btn-outline-${this.btnOutline}`]:this.isNotNull(this.btnOutline),
      [`btn-block`]:this.isNotNull(this.btnBlock),
      [`btn-${this._btnSmall}`]:this.isNotNull(this.btnSmall),
      [`btn-${this.btnLarge}`]:this.isNotNull(this.btnLarge),
      [`btn-${this.color}`]:this.isNotNull(this.color),
      [`btn-fab`]:this.isNotNull(this.fabButton),
      [`btn-mini-fab`]:this.isNotNull(this.miniFabButton),
      [`btn-rounded`]:this.isNotNull(this.round)
    }
    this.updateClassService.updateClass(this.element,classMap);
  }

  ngOnInit():void{
    this.setClassMap();
  }

}
