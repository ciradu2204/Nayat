import {OnInit, Directive, Optional, Self, Input, ElementRef, NgZone, DoCheck, OnDestroy, OnChanges, Inject, InjectionToken } from '@angular/core';
import { FormFieldControl } from '../ce-form-field/ce-formfieldcontrol';
import { NgControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import {AutofillMonitor} from '@angular/cdk/text-field';

const INVALID_INPUT_TYPES = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image', 
  'radio',
  'range',
  'reset',
  'submit'
];

export const INPUT_VALUE_ACCESSOR =
    new InjectionToken<{value: any}>('INPUT_VALUE_ACCESSOR');

export function getInputUnsupportedTypeError(type: string): Error {
  return Error(`Input type "${type}" isn't supported by ceInput.`);
}
// tslint:disable-next-line: prefer-const
let supportedInputTypes: Set<string>;
const validInputTypes=[
  'color',
  'button',
  'checkbox',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'text',
  'time',
  'url',
  'week',
];
export function getSupportedInputTypes(): Set<string>{
  if (supportedInputTypes) {
    return supportedInputTypes;
  }
  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(validInputTypes);
    return supportedInputTypes;
  }
  const featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(validInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));

  return supportedInputTypes;
}

export class ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }
}

let nextUniqueId = 0;

@Directive({
// tslint:disable-next-line: directive-selector
  selector: `input[ceInput], textarea[ceInput], select[ceNativeControl],
  input[ceNativeControl], textarea[ceNativeControl]`,
  exportAs: 'ceInput',
  host: {
    'class': 'ce-input-element ce-form-field-autofill-control',
    '[class.ce-input-server]': '_isServer',
    '[attr.id]': 'id',
    '[attr.placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.readonly]': 'readonly && !_isNativeSelect || null',
    '[attr.aria-describedby]': '_ariaDescribedby || null',
    '[attr.aria-invalid]': 'errorState',
    '[attr.aria-required]': 'required.toString()',
    '(blur)': '_focusChanged(false)',
    '(focus)': '_focusChanged(true)',
    '(input)': '_onInput()',
  },
  providers: [{provide: FormFieldControl, useExisting: CeInputs}],
})
export class CeInputs implements OnInit,OnChanges,
OnDestroy, DoCheck {
  protected _uid = `ce-input-${nextUniqueId++}`;
  private _inputValueAccessor: {value: any};
  protected _previousNativeValue: any;
  focused: boolean = false;
  readonly stateChanges: Subject<void> = new Subject<void>();
  autofilled = false;
  _isNativeSelect = false;
  _isServer = false;
  controlType: string = 'ce-input';
  _ariaDescribedby: string;

  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = '' + value !== 'false';
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  protected _disabled = false;

  @Input()
  get id(): string { return this._id; }
  set id(value: string) { this._id = value || this._uid; }
  protected _id: string;

  @Input() placeholder: string;
  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = '' + value !== 'false'; }
  protected _required = false;

  @Input()
  get type(): string { return this._type; }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
    if (!this._isTextarea() && getSupportedInputTypes().has(this._type)) {
      (this._elementRef.nativeElement as HTMLInputElement).type = this._type;
    }
  }
  protected _type = 'text';

  @Input() errorStateMatcher: ErrorStateMatcher;

  @Input()
  get value(): string { return this._inputValueAccessor.value; }
  set value(value: string) {
    if (value !== this.value) {
      this._inputValueAccessor.value = value;
      this.stateChanges.next();
    }
  }
  

  @Input()
  get readonly(): boolean { return this._readonly; }
  set readonly(value: boolean) { this._readonly = '' + value !== 'false'; }
  private _readonly = false;

  protected _neverEmptyInputTypes = [
    'date',
    'datetime',
    'datetime-local',
    'month',
    'time',
    'week'
  ].filter(t => getSupportedInputTypes().has(t));

  
  _onInput() {
  }

  setDescribedByIds(ids: string[]) {
    this._ariaDescribedby = ids.join(' ');
  }


  protected _validateType() {
    if (INVALID_INPUT_TYPES.indexOf(this._type) > -1) {
      throw getInputUnsupportedTypeError(this._type);
    }
  }
  protected _isTextarea() {
    return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
  }

  constructor(
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    protected _platform: Platform,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() _parentForm: NgForm,
    @Optional() _parentFormGroup: FormGroupDirective,
    _defaultErrorStateMatcher: ErrorStateMatcher,
    private _autofillMonitor: AutofillMonitor,
    @Optional() @Self() @Inject(INPUT_VALUE_ACCESSOR) inputValueAccessor: any,
    ngZone: NgZone
  ) { 
    //super(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    const element = this._elementRef.nativeElement;
    this._inputValueAccessor = inputValueAccessor || element;
    this._previousNativeValue = this.value;
    this.id = this.id;
    if(_platform.IOS){
      ngZone.runOutsideAngular(()=>{
        _elementRef.nativeElement.addEventListener('keyup',(event:Event)=>{
          let el = event.target as HTMLInputElement;
          if (!el.value && !el.selectionStart && !el.selectionEnd) {
            el.setSelectionRange(1, 1);
            el.setSelectionRange(0, 0);
          }
        });
      });
    }
    this._isServer = !this._platform.isBrowser;
    this._isNativeSelect = element.nodeName.toLowerCase() === 'select';
    if (this._isNativeSelect) {
      this.controlType = (element as HTMLSelectElement).multiple ? 'ce-native-select-multiple' :    'ce-native-select';                                                            'mat-native-select';
    }     
   }

  ngOnInit() {
    if(this._platform.isBrowser){
      this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(event => {
        this.autofilled = event.isAutofilled;
        this.stateChanges.next();
      });
    }
  }
  ngOnChanges() {
    this.stateChanges.next();
  }
  ngOnDestroy() {
    this.stateChanges.complete();

    if (this._platform.isBrowser) {
      this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
    }
  }
  ngDoCheck() {
    this._dirtyCheckNativeValue();
  }

  protected _dirtyCheckNativeValue() {
    const newValue = this._elementRef.nativeElement.value;

    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this.stateChanges.next();
    }
  }
  focus(): void {
    this._elementRef.nativeElement.focus();
  }

  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
      this.focused = isFocused;
      this.stateChanges.next();
    }
  }
  protected _isNeverEmpty() {
    return this._neverEmptyInputTypes.indexOf(this._type) > -1;
  }
  protected _isBadInput() {
    let validity = (this._elementRef.nativeElement as HTMLInputElement).validity;
    return validity && validity.badInput;
  }
  get empty(): boolean {
    return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
        !this.autofilled;
  }

  get shouldLabelFloat(): boolean {
    if (this._isNativeSelect) {
      const selectElement = this._elementRef.nativeElement as HTMLSelectElement;
      const firstOption: HTMLOptionElement | undefined = selectElement.options[0];
      return this.focused || selectElement.multiple || !this.empty ||
             !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
    } else {
      return this.focused || !this.empty;
    }
  }
  onContainerClick() {
    if (!this.focused) {
      this.focus();
    }
  }
  
}
