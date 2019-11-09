import { Component, OnInit, EventEmitter, Output, ViewChild, TemplateRef, Input, Renderer2, ElementRef, Optional, Inject, ViewContainerRef, ChangeDetectorRef, OnDestroy, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { OverlayRef, Overlay } from '@angular/cdk/overlay';
import { TemplatePortal, CdkPortalOutlet } from '@angular/cdk/portal';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { MenuOptions } from './ce-menu-options';

export type menuAlignment = 'left' | 'right' | 'top' | 'bottom';
export const DRAWER_ANIMATE_DURATION = 300;

@Component({
  selector: 'app-ce-menu',
  templateUrl: './ce-menu.component.html',
  styleUrls: ['./ce-menu.component.scss'],
  preserveWhitespaces: false,
  changeDetection    : ChangeDetectionStrategy.OnPush
})
export class CeMenuComponent<T = any, R = any, D = any> implements OnInit, MenuOptions, OnDestroy, AfterViewInit {

  overlayRef: OverlayRef;
  portal: TemplatePortal;
  focusTrap: FocusTrap;
  isOpen = false;
  previouslyFocusedElement: HTMLElement;
  @Output() readonly nzOnViewInit = new EventEmitter<void>();
  nzAfterOpen = new Subject<void>();
  nzAfterClose = new Subject<R>();
  @ViewChild('menuTemplate') menuTemplate: TemplateRef<{}>;
  @ViewChild(CdkPortalOutlet) bodyPortalOutlet: CdkPortalOutlet;
  @Input() alignment: menuAlignment = 'left';
  @Input() offsetX = 0;
  @Input() offsetY = 0;
  @Input() maskClosable = true;
  @Input() mask = true;
  @Input() zIndex = 1000;
  @Input() maskStyle: object = {};
  @Input() wrapClassName: string;
  @Input() menuTitle: string | TemplateRef<{}>;
  @Input() menuContent: string | TemplateRef<{}>;
  @Input() bodyStyle: object = {};
  @Input() menuWidth: number | string;
  @Input() menuHeight: number | string;
  @Input() menuClosable: boolean;
  @Input()
  set visible(value: boolean) {
    this.isOpen = value;
  }

  get visible(): boolean {
    return this.isOpen;
  }
// tslint:disable-next-line: no-output-on-prefix
  @Output() readonly onClose = new EventEmitter<MouseEvent>();
  get offsetTransform(): string {
    if (!this.isOpen || (this.offsetX + this.offsetY) === 0) {
      return null;
    }
    switch (this.alignment) {
      case 'left':
        return `translateX(${this.offsetX}px)`;
      case 'right':
        return `translateX(-${this.offsetX}px)`;
      case 'top':
        return `translateY(${this.offsetY}px)`;
      case 'bottom':
        return `translateY(-${this.offsetY}px)`;
    }
  }
  closeClick(): void {
    this.onClose.emit();
  }
  get transform(): string {

    if (this.isOpen) {
      return null;
    }
    switch (this.alignment) {
      case 'left':
        return `translateX(-100%)`;
      case 'right':
        return `translateX(100%)`;
      case 'top':
        return `translateY(-100%)`;
      case 'bottom':
        return `translateY(100%)`;
    }
  }

  get width(): string | number {
    return this.isLeftOrRight ? this.menuWidth : null;
  }

  get height(): string  | number {
    return  this.isLeftOrRight ? this.menuHeight : null;
  }

  get isLeftOrRight(): boolean {
    return this.alignment === 'left' || this.alignment === 'right';
  }
  maskClick(): void {
    if (this.maskClosable && this.mask) {
       this.onClose.emit();
      //this.close();
    }
  }
  isNonEmptyString(value: {}): boolean {
    return typeof value === 'string' && value !== '';
  }

  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }
  constructor(
    @Optional() @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private overlay: Overlay,
    private elementRef: ElementRef,
    private focusTrapFactory: FocusTrapFactory,
    private viewContainerRef: ViewContainerRef,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.addOverlay();
    this.updateOverlayStyle();
    this.updateBodyOverflow();
    this.changeDetectorRef.detectChanges();
    this.open();
  }
  ngAfterViewInit(): void {
    this.attachBodyContent();
  }
  private disposeOverlay(): void {
    this.overlayRef.dispose();
    this.overlayRef = null;
  }
  ngOnDestroy(): void {
    this.disposeOverlay();
  }
  private attachBodyContent(): void {
    this.bodyPortalOutlet.dispose();
  }
  open(): void {
    this.isOpen = true;
    this.updateOverlayStyle();
    this.updateBodyOverflow();
    this.savePreviouslyFocusedElement();
    this.trapFocus();
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.nzAfterOpen.next();
    }, DRAWER_ANIMATE_DURATION);
  }
  close(result?: R): void {
    this.isOpen = false;
    this.updateOverlayStyle();
    this.changeDetectorRef.detectChanges();
    setTimeout(() => {
      this.updateBodyOverflow();
      this.restoreFocus();
      this.nzAfterClose.next(result);
      this.nzAfterClose.complete();
    }, DRAWER_ANIMATE_DURATION);
  }
  private restoreFocus(): void {
    // We need the extra check, because IE can set the `activeElement` to null in some cases.
    if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
      this.previouslyFocusedElement.focus();
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }
  private updateOverlayStyle(): void {
    if (this.overlayRef && this.overlayRef.overlayElement) {
      this.renderer.setStyle(this.overlayRef.overlayElement, 'pointer-events', this.isOpen ? 'auto' : 'none');
    }
  }
  private updateBodyOverflow(): void {
    if (this.overlayRef) {
      if (this.isOpen) {
        this.overlayRef.getConfig().scrollStrategy.enable();
      } else {
        this.overlayRef.getConfig().scrollStrategy.disable();
      }
    }
  }
  savePreviouslyFocusedElement(): void {
    if (this.document) {
      this.previouslyFocusedElement = this.document.activeElement as HTMLElement;
      this.previouslyFocusedElement.blur();

      if (typeof this.elementRef.nativeElement.focus === 'function') {
        Promise.resolve().then(() => this.elementRef.nativeElement.focus());
      }
    }
  }
  private trapFocus(): void {
    if (!this.focusTrap) {
      this.focusTrap = this.focusTrapFactory.create(this.overlayRef.overlayElement);
    }
    this.focusTrap.focusInitialElementWhenReady();
  }
  private addOverlay():void {
    if (!this.overlayRef){
      this.portal = new TemplatePortal(this.menuTemplate, this.viewContainerRef);
      this.overlayRef = this.overlay.create();
    }
  }

}
