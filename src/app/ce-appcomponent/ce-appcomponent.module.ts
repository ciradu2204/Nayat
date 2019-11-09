import  { CeFloatingButtonComponent } from './ce-floating-button/ce-floating-button.component';
import { NgModule } from '@angular/core';
import { CeComponentsModule } from '../ce-components/ce-components.module'

@NgModule({
    declarations : [CeFloatingButtonComponent],
    imports: [ CeComponentsModule ],
    providers: [],
    exports: [CeFloatingButtonComponent],
    entryComponents: []
})
export class CeAppcomponentModule {
}