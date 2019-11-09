import { CeMenuService } from 'src/app/ce-components/ce-menu/ce-menu.service';
import { CeCollapsePanelComponent } from './ce-collapse/ce-collapse-panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CeCardComponent, CeCardContentDirective, CeCardActionsDirective, CeCardImageDirective, CeCardSmImageDirective, CeCardMdImageDirective, CeCardlgImageDirective, CeCardxlImageDirective, CeCardAvatarDirective, CeCardTitleGroupcomponent } from './ce-card/ce-card.component';
import { CeCardHeaderComponent, CeCardTitleDirective, CeCardSubtitleDirective } from './ce-card-header/ce-card-header.component';
import { CeCardFooterComponent } from './ce-card-footer/ce-card-footer.component';
import { CeButtonComponent } from './ce-button/ce-button.component';
import { CeRowComponent } from './ce-row/ce-row.component';
import { CeGridComponent } from './ce-grid/ce-grid.component';
import { CeColComponent } from './ce-col/ce-col.component';
import { CeBadgeComponent } from './ce-badge/ce-badge.component';
import { CeCheckboxComponent } from './ce-checkbox/ce-checkbox.component';
import { CeOtptextboxComponent } from './ce-otptextbox/ce-otptextbox.component';
import { CeLabelComponent } from './ce-label/ce-label.component';
import { CePercentageDonutComponent } from './ce-percentage-donut/ce-percentage-donut.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { CeHeaderComponent } from './ce-header/ce-header.component';
import { CeFooterComponent } from './ce-footer/ce-footer.component';
import { CeContentComponent } from './ce-content/ce-content.component';
import { CeToggleButtonComponent } from './ce-toggle-button/ce-toggle-button.component';
import { CeCollapseComponent } from './ce-collapse/ce-collapse.component';
import { CeListComponent } from './ce-list/ce-list.component';
import { CeTextareaComponent } from './ce-textarea/ce-textarea.component';
import { CeRadioTabButtonComponent } from './ce-radio-tab-button/ce-radio-tab-button.component';
import { CeRatingComponent } from './ce-rating/ce-rating.component';
import { CeMoodSelectComponent } from './ce-mood-select/ce-mood-select.component';
import { CeDropdownListboxComponent } from './ce-dropdown-listbox/ce-dropdown-listbox.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CeVerticalStepperComponent } from './ce-vertical-stepper/ce-vertical-stepper.component';
import { CeHorizontalStepperComponent } from './ce-horizontal-stepper/ce-horizontal-stepper.component';
import { CeRibbonComponent,RibbonDirective,BurstDirective} from './ce-ribbon/ce-ribbon.component';
import { CeSubHeaderComponent } from './ce-sub-header/ce-sub-header.component';
import { CeDonutTimerComponent } from './ce-donut-timer/ce-donut-timer.component';
import { CeModalControlService } from './ce-modal/ce-modal-control.service';
import { CeModalService } from './ce-modal/ce-modal-service.service';
import { CeModalComponent } from './ce-modal/ce-modal.component';
import { CeFormFieldComponent, InputSuffix, InputPrefix, InputLabel, InputHint, InputError, InputPlaceholder } from './ce-form-field/ce-form-field.component';
import { CeInputs, ErrorStateMatcher } from './ce-inputs/ce-inputs.component';
import { TextFieldModule } from '@angular/cdk/text-field';
// import { CeLineLimitPipe } from '../common/pipes/lineLimitPipe/ce-line-limit.pipe';
import { CeMenuComponent } from './ce-menu/ce-menu.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';
import { CeStringTemplateOutletDirective } from './ce-collapse/ce-string-template-outlet.directive';
@NgModule({
  declarations: [CeCardComponent,CeCardHeaderComponent, CeCardContentDirective, CeCardTitleDirective, CeCardSubtitleDirective, CeCardActionsDirective, CeCardFooterComponent, CeCardImageDirective, CeCardSmImageDirective, CeCardMdImageDirective, CeCardlgImageDirective, CeCardxlImageDirective, CeCardAvatarDirective, CeCardTitleGroupcomponent, CeButtonComponent, CeRowComponent, CeGridComponent, CeColComponent, CeBadgeComponent, CeCheckboxComponent, CeOtptextboxComponent, CeLabelComponent, CeHeaderComponent, CeFooterComponent, CeContentComponent, CeToggleButtonComponent, CeCollapseComponent,CeCollapsePanelComponent, CeListComponent, CeTextareaComponent, CeRadioTabButtonComponent, CeRatingComponent, CeMoodSelectComponent, CeSubHeaderComponent, CeDropdownListboxComponent,CePercentageDonutComponent,CeVerticalStepperComponent,CeHorizontalStepperComponent,CeRibbonComponent,RibbonDirective,BurstDirective, CeDonutTimerComponent,CeModalComponent,CeFormFieldComponent, CeInputs,InputPrefix,InputSuffix,InputLabel,InputHint,InputError,InputPlaceholder, CeMenuComponent,CeStringTemplateOutletDirective],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    RoundProgressModule,
    OverlayModule,
    PortalModule,
    TextFieldModule,
    // NoopAnimationsModule
  ],
  providers:[CeModalService,CeModalControlService,ErrorStateMatcher,CeMenuService],
  exports: [CeCardComponent,CeCardHeaderComponent, CeCardContentDirective, CeCardTitleDirective, CeCardSubtitleDirective, CeCardActionsDirective, CeCardFooterComponent, CeCardImageDirective, CeCardSmImageDirective, CeCardMdImageDirective, CeCardlgImageDirective, CeCardxlImageDirective, CeCardAvatarDirective, CeCardTitleGroupcomponent, CeGridComponent, CeButtonComponent, CeRowComponent, CeColComponent, CeBadgeComponent, CeCheckboxComponent, CeOtptextboxComponent, CeLabelComponent, CeHeaderComponent,CeFooterComponent,CeContentComponent,CeToggleButtonComponent, CeCollapseComponent,CeCollapsePanelComponent, CeListComponent,CeTextareaComponent,CeRadioTabButtonComponent,CeRatingComponent,CeMoodSelectComponent,CeSubHeaderComponent,CeDropdownListboxComponent,CePercentageDonutComponent,CeHorizontalStepperComponent,CeRibbonComponent,RibbonDirective,BurstDirective,CeDonutTimerComponent,CeModalComponent, CeFormFieldComponent,CeInputs,InputSuffix,InputPrefix,InputLabel,InputHint,InputError,InputPlaceholder],
  entryComponents:[CeModalComponent,CeMenuComponent]
})
export class CeComponentsModule { }
