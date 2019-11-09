import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChatinterfaceComponent } from './chatinterface/chatinterface.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import{NotificationComponent} from './notification/notification.component';
import{RequestComponent} from './request/request.component' ;
import{TaskownerComponent} from './taskowner/taskowner.component'
 import{AcceptAfterChatOptionComponent} from './acceptafter-chat/acceptafter-chat.component'
import { CeComponentsModule } from '../ce-components/ce-components.module';
import{AlertAComponent} from './alert-a/alert-a.component';
 import{AssignmobileComponent} from './assignmobile/assignmobile.component';
import { TaskownernotifyComponent } from './taskownernotify/taskownernotify.component';
import { InboxComponent } from './inbox/inbox.component'
@NgModule({
  declarations: [ChatinterfaceComponent,LoginComponent,OtpComponent,ProfileComponent,RegistrationComponent, NotificationComponent,RequestComponent,TaskownerComponent, AcceptAfterChatOptionComponent, AlertAComponent, AssignmobileComponent,TaskownernotifyComponent, InboxComponent],
  imports: [
    CommonModule,
    CeComponentsModule,
    AngularFontAwesomeModule,

  ]
})
export class PagesModule { }
