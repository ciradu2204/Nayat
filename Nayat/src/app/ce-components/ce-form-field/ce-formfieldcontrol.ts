import {NgControl} from '@angular/forms';
import { Observable } from 'rxjs';


export abstract class FormFieldControl<T>{
  value: T | null;
  readonly stateChanges: Observable<void>;
  readonly id:string;
  readonly placeholder:string;
  readonly ngControl:NgControl | null;
  readonly focused:boolean;
  readonly empty:boolean;
  readonly shouldLabelFloat:boolean;
  readonly required:boolean;
  readonly disabled:boolean;
  readonly errorState:boolean;
  readonly controlType?:string;
  readonly autofilled?:boolean;
  abstract setDescribedByIds(ids:string[]):void;
  abstract onContainerClick(event:MouseEvent):void;
  


}