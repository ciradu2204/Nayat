import { CeModalControlService } from './ce-modal-control.service';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
  Inject,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  ComponentRef,
  TemplateRef,
  Type,
  OnChanges,
  SimpleChanges,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  AfterViewInit,
  OnDestroy } from '@angular/core';
import {BlockScrollStrategy, OverlayRef, Overlay} from '@angular/cdk/overlay';
import { FocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import { CeModalRef } from './ce-modal.ref';
import { Observable, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { OnClickCallback, CeModalOptions } from './ce-modal-options';

type AnimationState= 'enter'|'leave'|null;

@Component({
  selector: 'ce-modal',
  templateUrl: './ce-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
  preserveWhitespaces: false,
// tslint:disable-next-line: use-host-property-decorator
  host: {
    'class': 'ce-modal'
  }
})
// tslint:disable-next-line: max-line-length
export class CeModalComponent<T= any, R= any> extends CeModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, CeModalOptions<T> {
  @Input()
  set modalClosable(value: boolean) { this._modalClosable = '' + value !== 'true'; }
  get modalClosable(): boolean { return this._modalClosable; }
  @Input()
  set visible(value: boolean) {this._visible = '' + value !== 'false'; }
  get visible(): boolean { return this._visible; }
  @Input()
  set noAnimation(value: boolean) {this._noAnimation = '' + value !== 'false'; }
  get noAnimation(): boolean {return this._noAnimation; }
  @Input()
  set loadingOk(value: boolean) {this._loadingOk = '' + value !== 'false'; }
  get loadingOk(): boolean { return this._loadingOk; }
  @Input()
  set loadingCancel(value: boolean) {this._loadingCancel = '' + value !== 'false'; }
  get loadingCancel(): boolean { return this._loadingCancel ; }
  @Input()
  set tranparentBg(value: boolean) { this._tranparentBg = '' + value !== 'false'; }
  get tranparentBg(): boolean { return this._tranparentBg; }
  @Input()
  set bgClosable(value: boolean) { this._bgClosable = '' + value !== 'false'; }
  get bgClosable(): boolean { return this._bgClosable; }


  get hidden(): boolean {
    return !this.visible && !this.animationState;
  }
  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private viewContainer: ViewContainerRef,
    private modalControl: CeModalControlService,
    private overlay: Overlay,
    @Inject(DOCUMENT) private document: any
  ) {
    super();
  }

  get afterOpen(): Observable<void> {
    return this.ceAfterOpen.asObservable();
  }

  get afterClose(): Observable<R> {
    return this.ceAfterClose.asObservable();
  }

  private _visible: boolean;
  private _noAnimation: boolean;
  private _loadingOk: boolean;
  private _loadingCancel: boolean;
  private _tranparentBg = true;
  private _bgClosable = true;
  private _modalClosable = true;
  private scrollStat: BlockScrollStrategy;
  private previouslyFocusElement: HTMLElement;
  private focusTrap: FocusTrap;
  private focusTrapFactory: FocusTrapFactory;
  private animationState: AnimationState;
  private contentComponentRef: ComponentRef<T>;
  private container: HTMLElement | OverlayRef;
  transformOrgin = '0px 0px 0px';
  maskAnimationClassMap: object|null;
  modalAnimationClassMap: object|null;

  @Input() cancelText: string;
  @Input() okText: string;
  @Input() zIndex = 1000;
  @Input() bgStyle: object;
  @Input() ceStyle: object;
  @Input() modalTitle: string|TemplateRef<{}>|Type<T>;
  @Input() contentStyle: object;
  @Input() modalText: string|TemplateRef<{}>|Type<T> ;
  @Input() modalFooter: string | TemplateRef<{}>|Type<T> ;

  @Output() readonly ceAfterOpen = new EventEmitter<void>();
  @Output() readonly ceAfterClose = new EventEmitter<R>();
  @Output() readonly ceVisibleChanges = new EventEmitter<boolean>();

// tslint:disable-next-line: no-output-on-prefix
  @Input() @Output() readonly onOk: EventEmitter<T>|OnClickCallback<T> = new EventEmitter<T>();
// tslint:disable-next-line: no-output-on-prefix
  @Input() @Output() readonly onCancel: EventEmitter<T>|OnClickCallback<T> = new EventEmitter<T>();

  @ViewChild('modalContainer')modalContainer: ElementRef;
  @ViewChild('modalBody', {read: ViewContainerRef})modalBody: ViewContainerRef;
  @Input() getContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef) = () => this.overlay.create();

  private changeVisible(visible: boolean, closeResult?: R): Promise<void> {
    if (this.visible !== visible) {
      this.visible = visible;
      this.ceVisibleChanges.emit(visible);
      return this.handleVisibleStates(visible, true, closeResult);
    }
    return Promise.resolve();
  }
  private trapFocus(): void {
     if (!this.focusTrap) {
      console.log(this.elementRef.nativeElement)
       this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
     } else {
       this.focusTrap.focusInitialElementWhenReady();
     }
  }
  private restoreFocus(): void {
    if (this.previouslyFocusElement && typeof this.previouslyFocusElement.focus === 'function') {
      this.previouslyFocusElement.focus();
    }
    if (this.focusTrap) {
      this.focusTrap.destroy();
    }
  }
  private setPreviouslyFocusedElement(): void {
    if (this.document) {
      this.previouslyFocusElement = this.document.activeElement as HTMLElement;
    }
  }
  private updateTransformOrigin(): void {
// tslint:disable-next-line: no-unused-expression
    this.modalContainer.nativeElement as HTMLElement;
  }
  private changeAnimatonState(state: AnimationState): void {
    this.animationState = state;
    if (state) {
      this.maskAnimationClassMap = {
        [`fade-${state}`]: true,
        [`fade-${state}-active`]: true
      };
      this.modalAnimationClassMap = {
        [`zoom-${state}`]: true,
        [`zoom-${state}-active`]: true
      };
    } else {
      this.maskAnimationClassMap = this.modalAnimationClassMap = null;
    }

  }
  private animateTo(isVisible: boolean): Promise<void> {
    if (isVisible) {
      setTimeout(() => { this.updateTransformOrigin(); });
    }
    this.changeAnimatonState(isVisible ? 'enter' : 'leave');
    return new Promise((resolve) => setTimeout(() => {
      this.changeAnimatonState('enter');
      resolve();
    }, this.noAnimation ? 0 : 200));
  }
  private handleVisibleStates(visible: boolean, animation: boolean = true, closeResult?: R) {
    if (visible) {
      this.setPreviouslyFocusedElement();
    }
    return Promise
      .resolve(animation ? this.animateTo(visible) : undefined)
      .then(() => {
        if (visible) {
          this.ceAfterOpen.emit();
        } else {
          this.ceAfterClose.emit(closeResult);
          this.restoreFocus();
          this.cdr.markForCheck();
        }
      });
  }
  getContentComponent(): T {
    return this.contentComponentRef && this.contentComponentRef.instance;
  }
  open(): void {
    this.changeVisible(true);
  }
  close(result?: R) {
    this.changeVisible(false, result);
  }
  destroy(result?: R) {
    this.close(result);
  }
  getInstance(): CeModalComponent {
    return this;
  }
  getElement(): HTMLElement {
    return this.elementRef && this.elementRef.nativeElement;
  }
  isPromise(obj: any): obj is Promise<any> {
    return !!obj && typeof obj.then === 'function' && obj.catch === 'function';
  }
  onClickBg(event: MouseEvent): void {
    if (this.tranparentBg && this.bgClosable &&  (event.target as HTMLElement).classList.contains('ce-modal-wrap') && this.visible) {
      this.modalControl.closeAll();
    }
  }
  closeModal(): void {
    if (this.visible) {
      this.modalControl.closeAll();
    }
  }
  isTemplateRef(value: {}): boolean {
    return value instanceof TemplateRef;
  }
  public isEmptyString(value: {}): boolean {
    return typeof value === 'string' && value !== '';
  }
  public isComponent(value: {}): boolean {
    return value instanceof Type;
  }
  createComponent(component: Type<T>) {
    const factory = this.cfr.resolveComponentFactory(component);
    const childInjector = Injector.create({
      providers: [{provide: CeModalRef, useValue: this}],
// tslint:disable-next-line: deprecation
      parent: this.viewContainer.parentInjector
    });
    this.contentComponentRef = factory.create(childInjector);
    this.contentComponentRef.changeDetectorRef.detectChanges();
  }
  ngOnInit() {
    if (this.isComponent(this.modalText)) {
      this.createComponent(this.modalText as Type<T>);
    }
    this.container = typeof this.getContainer === 'function' ? this.getContainer() : this.getContainer;
    if (this.container instanceof HTMLElement) {
      this.container.appendChild(this.elementRef.nativeElement);
    } else if (this.container instanceof OverlayRef) {
      this.container.overlayElement.appendChild(this.elementRef.nativeElement);
    }
    this.modalControl.registerModal(this);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.visible) {
      this.handleVisibleStates(this.visible, !changes.visible.firstChange);
    }
  }
  ngAfterViewInit(): void {
    if (this.contentComponentRef) {
      this.modalBody.insert(this.contentComponentRef.hostView);
    }
  }
  ngOnDestroy(): void {
    this.changeVisible(false).then(() => {
      this.modalControl.deregisterModal(this);
    });
  }

}
