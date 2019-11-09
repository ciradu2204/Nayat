import { Component, OnInit, Directive, Input, ElementRef, ViewChild, ContentChild, ContentChildren, QueryList, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, Optional, Inject, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy, NgZone, InjectionToken } from '@angular/core';
import { AnimationTriggerMetadata, trigger, state, transition, style, animate } from '@angular/animations';
import { FormFieldControl } from './ce-formfieldcontrol';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import {startWith, take, takeUntil} from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { NgControl } from '@angular/forms';

export function getMatFormFieldDuplicatedHintError(align: string): Error {
  return Error(`A hint was already declared for 'align="${align}"'.`);
}

export const ceFormFieldAnimations: {
  readonly transitionMessages: AnimationTriggerMetadata
} = {
  transitionMessages: trigger('transitionMessages', [
    state('enter', style({ opacity: 1, transform: 'translateY(0%)' })),
    transition('void => enter', [
      style({ opacity: 0, transform: 'translateY(-100%)' }),
      animate('300ms cubic-bezier(0.55, 0, 0.55, 0.2)'),
    ]),
  ])
};

export type FloatLabelType = 'always' | 'never' | 'auto';
export interface LabelOptions {
  float?: FloatLabelType;
}
export const LABEL_GLOBAL_OPTIONS =new InjectionToken<LabelOptions>('ce-label-global-options');
export type color='primary'|'secondary'|'tertiary'|'success'|'warning'|'danger'|'dark'|'medium'|'light';

@Directive({
  selector: '[input-suffix]',
})
export class InputSuffix {}

@Directive({
  selector: '[input-prefix]',
})
export class InputPrefix {}

@Directive({
  selector: 'input-label'
})
export class InputLabel {}

let nextUniqueId = 0;


@Directive({
  selector: 'input-hint',
  host: {
    'class': 'ce-hint',
    '[class.ce-right]': 'align == "end"',
    '[attr.id]': 'id',
    '[attr.align]': 'null',
  }
})
export class InputHint {
  @Input() align: 'start' | 'end' = 'start';
  @Input() id: string = `ce-hint-${nextUniqueId++}`;
}

@Directive({
  selector: 'input-error',
  host: {
    'class': 'ce-error',
    'role': 'alert',
    '[attr.id]': 'id',
  }
})
export class InputError {
  @Input() id: string = `mat-error-${nextUniqueId++}`;
}

@Directive({
  selector: 'input-placeholder'
})
export class InputPlaceholder {}

@Component({
  selector: 'ce-form-field',
  exportAs: 'ceFormField',
  templateUrl: './ce-form-field.component.html',
  styleUrls: ['./ce-form-field.component.scss'],
  animations: [ceFormFieldAnimations.transitionMessages],
// tslint:disable-next-line: use-host-property-decorator
  host: {
    'class': 'ce-form-field',
    // '[class.ce-form-field-appearance-standard]': 'appearance == "standard"',
    '[class.ce-form-field-appearance-legacy]': 'appearance == "legacy"',
    '[class.ce-form-field-invalid]': '_control.errorState',
    '[class.ce-form-field-can-float]': '_canLabelFloat',
    '[class.ce-form-field-should-float]': '_shouldLabelFloat()',
    '[class.ce-form-field-has-label]': '_hasFloatingLabel()',
    '[class.ce-form-field-hide-placeholder]': '_hideControlPlaceholder()',
    '[class.ce-form-field-disabled]': '_control.disabled',
    '[class.ce-form-field-autofilled]': '_control.autofilled',
    '[class.ce-focused]': '_control.focused',
    '[class.ce-accent]': 'color == "accent"',
    '[class.ce-warn]': 'color == "warn"',
    '[class.ng-untouched]': '_shouldForward("untouched")',
    '[class.ng-touched]': '_shouldForward("touched")',
    '[class.ng-pristine]': '_shouldForward("pristine")',
    '[class.ng-dirty]': '_shouldForward("dirty")',
    '[class.ng-valid]': '_shouldForward("valid")',
    '[class.ng-invalid]': '_shouldForward("invalid")',
    '[class.ng-pending]': '_shouldForward("pending")',
    '[class._mat-animation-noopable]': '!_animationsEnabled',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CeFormFieldComponent implements AfterContentInit, AfterViewInit, OnDestroy {
  private _hideRequiredMarker: boolean;
  @Input() appearance = 'legacy';
  private _labelOptions: LabelOptions;
  private _showAlwaysAnimate = false;
  _animationsEnabled: boolean;
  private _destroyed = new Subject<void>();

  @Input() color: color = 'dark';
  @Input()
  get hideRequiredMarker(): boolean { return this._hideRequiredMarker; }
  set hideRequiredMarker(value: boolean) {
    this._hideRequiredMarker = '' + value !== 'false';
  }
  _subscriptAnimationState: string = '';

  @ViewChild('underline') underlineRef: ElementRef;
  @ViewChild('connectionContainer') _connectionContainerRef: ElementRef;
  @ViewChild('inputContainer') _inputContainerRef: ElementRef;
  @ViewChild('label') private _label: ElementRef;
  @ContentChild(FormFieldControl) _control: FormFieldControl<any>;
  @ContentChild(InputPlaceholder) _placeholderChild: InputPlaceholder;
  @ContentChild(InputLabel) _labelChild: InputLabel;
  @ContentChildren(InputError) _errorChildren: QueryList<InputError>;
  @ContentChildren(InputHint) _hintChildren: QueryList<InputHint>;
  @ContentChildren(InputPrefix) _prefixChildren: QueryList<InputPrefix>;
  @ContentChildren(InputSuffix) _suffixChildren: QueryList<InputSuffix>;
  get _shouldAlwaysFloat(): boolean {
    return this.floatLabel === 'always' && !this._showAlwaysAnimate;
  }

  
  get _canLabelFloat(): boolean { return this.floatLabel !== 'never'; }

  @Input()
  get hintLabel(): string { return this._hintLabel; }
  set hintLabel(value: string) {
    this._hintLabel = value;
    this._processHints();
  }
  private _hintLabel = '';
  _hintLabelId: string = `ce-hint-${nextUniqueId++}`;
  _labelId = `ce-form-field-label-${nextUniqueId++}`;

  private _processHints() {
    this._validateHints();
    this._syncDescribedByIds();
  }
  private _validateHints() {
    if (this._hintChildren) {
      let startHint: InputHint;
      let endHint: InputHint;
      this._hintChildren.forEach((hint: InputHint) => {
        if (hint.align === 'start') {
          if (startHint || this.hintLabel) {
            throw getMatFormFieldDuplicatedHintError('start');
          }
          startHint = hint;
        } else if (hint.align === 'end') {
          if (endHint) {
            throw getMatFormFieldDuplicatedHintError('end');
          }
          endHint = hint;
        }
      });
    }
  }
  private _syncDescribedByIds() {
    if (this._control) {
      let ids: string[] = [];

      if (this._getDisplayedMessages() === 'hint') {
        const startHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'start') : null;
        const endHint = this._hintChildren ?
            this._hintChildren.find(hint => hint.align === 'end') : null;

        if (startHint) {
          ids.push(startHint.id);
        } else if (this._hintLabel) {
          ids.push(this._hintLabelId);
        }

        if (endHint) {
          ids.push(endHint.id);
        }
      } else if (this._errorChildren) {
        ids = this._errorChildren.map(error => error.id);
      }

      this._control.setDescribedByIds(ids);
    }
  }

  _getDisplayedMessages(): 'error' | 'hint' {
    return (this._errorChildren && this._errorChildren.length > 0 &&
        this._control.errorState) ? 'error' : 'hint';
  }

   private _floatLabel: FloatLabelType;
  @Input()
  get floatLabel(): FloatLabelType {
    return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
  }
  set floatLabel(value: FloatLabelType) {
    if (value !== this._floatLabel) {
      this._floatLabel = value || this._labelOptions.float || 'auto';
      this._changeDetectorRef.markForCheck();
    }
  }
 


  constructor( public _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef,
    private _platform?: Platform,
    private _ngZone?: NgZone,
    @Optional() @Inject(LABEL_GLOBAL_OPTIONS) labelOptions?: LabelOptions,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) _animationMode?: string
    ) {
      // super(_elementRef);
      this._labelOptions = labelOptions ? labelOptions : {};
      this.floatLabel = this._labelOptions.float || 'auto';
      this._animationsEnabled = _animationMode !== 'NoopAnimations';
      this.appearance = 'legacy';
    }
    getConnectedOverlayOrigin(): ElementRef {
      return this._connectionContainerRef || this._elementRef;
    }
  

  ngAfterContentInit() {
    
    const control = this._control;

    if (control.controlType) {
      this._elementRef.nativeElement.classList.add(`ce-form-field-type-${control.controlType}`);
    }
// tslint:disable-next-line: no-non-null-assertion
    control.stateChanges.pipe(startWith<void>(null!)).subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
    if (control.ngControl && control.ngControl.valueChanges) {
      control.ngControl.valueChanges
        .pipe(takeUntil(this._destroyed))
        .subscribe(() => this._changeDetectorRef.markForCheck());
    }
    this._hintChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._processHints();
      this._changeDetectorRef.markForCheck();
    });
    this._errorChildren.changes.pipe(startWith(null)).subscribe(() => {
      this._syncDescribedByIds();
      this._changeDetectorRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    // Avoid animations on load.
    this._subscriptAnimationState = 'enter';
    this._changeDetectorRef.detectChanges();
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  _shouldForward(prop: keyof NgControl): boolean {
    const ngControl = this._control ? this._control.ngControl : null;
    return ngControl && ngControl[prop];
  }
  _hasFloatingLabel() {
    return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
  }
  _animateAndLockLabel(): void {
    if (this._hasFloatingLabel() && this._canLabelFloat) {
      if (this._animationsEnabled) {
        this._showAlwaysAnimate = true;

        fromEvent(this._label.nativeElement, 'transitionend').pipe(take(1)).subscribe(() => {
          this._showAlwaysAnimate = false;
        });
      }

      this.floatLabel = 'always';
      this._changeDetectorRef.markForCheck();
    }
  }

  _hasPlaceholder() {
    return !!(this._control && this._control.placeholder || this._placeholderChild);
  }

  _hasLabel() {
    return !!this._labelChild;
  }
  _hideControlPlaceholder() {
    return this.appearance === 'legacy' && !this._hasLabel() ||
        this._hasLabel() && !this._shouldLabelFloat();
  }
  _shouldLabelFloat() {
    return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
  }
}
