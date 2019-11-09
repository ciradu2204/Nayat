import { CeModalComponent } from './ce-modal.component';
import {Observable} from 'rxjs';
export abstract class CeModalRef<T= any, R= any> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    abstract getContentComponent(): T;
    abstract getElement(): HTMLElement;
    abstract getInstance(): CeModalComponent;
}
