import { Component, ChangeDetectorRef, ChangeDetectionStrategy, ViewEncapsulation, OnInit, OnDestroy, Input, HostBinding, Output, EventEmitter, TemplateRef, Host, ElementRef, Renderer2 } from '@angular/core';
import { AnimationTriggerMetadata, trigger, state, style, transition, animate } from '@angular/animations';
import { CeCollapseComponent } from './ce-collapse.component';

export const collapseAnimation:AnimationTriggerMetadata = trigger('collapseAnimation',[
    state('expanded',style({height: '*'})),
    state('collapsed',style({height:0,overflow:'hidden'})),
    state('hidden',style({height:0,display:'none'})),
    transition('expanded=>collapsed',animate('150ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
    transition('expanded=>hidden',animate('150ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
    transition('collapsed=>expanded',animate('150ms cubic-bezier(0.645, 0.045, 0.355, 1)')),
    transition('hidden=>expanded',animate('150ms cubic-bezier(0.645, 0.045, 0.355, 1)'))
]); 

@Component({
    selector : 'ce-collapse-panel',
    templateUrl :'./ce-collapse-panel.component.html',
    changeDetection : ChangeDetectionStrategy.OnPush,
    encapsulation : ViewEncapsulation.None,
    animations : [collapseAnimation],
    styles : [
        `ce-collapse-panel {
            display : block;
        }`
    ],
    host :{
        '[class.collapse-no-arrow]' : '!ceShowArrow'
    }
})

export class CeCollapsePanelComponent implements OnInit, OnDestroy{
    private __ceActive =false;
    private __ceDisabled =false;
    private __ceShowArrow = true;
    private _ceShowLocation = false;

    @Input()@HostBinding('class.collapse-item-active')
    
    public get ceActive(){
        return this.__ceActive;
    }

    public set ceActive(value) {
        this.__ceActive = '' + value !== 'false';
    }
    
    @Input()@HostBinding('class.collapse-item-disabled')
    public get ceDisabled(){
        return this.__ceDisabled;
    }
    public set ceDisabled(value){
        this.__ceDisabled = value;
    }

    @Input() 
    public get ceShowArrow(){
        return this.__ceShowArrow;
    }

    public set ceShowArrow(value){
        this.__ceShowArrow = !value;
    }
    
    @Input() 
    public get ceShowLocation(){
        return this._ceShowLocation;
    }

    public set ceShowLocation(value){
        this._ceShowLocation = !value;
    }
    @Input() ceHeader : string | TemplateRef<{}>;
    @Input() ceExpandedIcon : string | TemplateRef<void>;
    @Input() ceExtra : string | TemplateRef<void>;
    @Output() readonly ceActiveChange = new EventEmitter<boolean>();

    clickHeader(): void{
        if(!this.ceDisabled){
            this.ceCollapseComponent.click(this);
        }
    }
    constructor(@Host() private ceCollapseComponent:CeCollapseComponent, private cdr :ChangeDetectorRef, elementRef : ElementRef, renderer: Renderer2){
        renderer.addClass(elementRef.nativeElement,'ce-collapse-item');
    }
    markForCheck(): void{
        this.cdr.markForCheck();
    }
    public isTemplateRef(value: {}): boolean {
        return value instanceof TemplateRef;
    }
    public isEmptyString(value: {}): boolean {
        return typeof value === 'string' && value !== '';
      }
    ngOnInit():void{
        this.ceCollapseComponent.addPanel(this);
    }
    ngOnDestroy():void{
        this.ceCollapseComponent.removePanel(this);
    }
}