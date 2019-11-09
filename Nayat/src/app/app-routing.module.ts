import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './Pages/login/login.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { OtpComponent } from './Pages/otp/otp.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ChatinterfaceComponent } from './Pages/chatinterface/chatinterface.component';
import{CeFloatingButtonComponent} from './ce-appcomponent/ce-floating-button/ce-floating-button.component'
import { NotificationComponent } from './Pages/notification/notification.component';
import { RequestComponent} from './Pages/request/request.component';
import{ TaskownerComponent} from './Pages/taskowner/taskowner.component';
import{AlertAComponent } from './Pages/alert-a/alert-a.component';
import {AcceptAfterChatOptionComponent } from './Pages/acceptafter-chat/acceptafter-chat.component';
import{AssignmobileComponent} from './Pages/assignmobile/assignmobile.component';
import { TaskownernotifyComponent } from './Pages/taskownernotify/taskownernotify.component';
import { InboxComponent } from './Pages/inbox/inbox.component'
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'otp',component:OtpComponent},
  {path:'profile',component:ProfileComponent},
  {path:'chat',component:ChatinterfaceComponent},
  {path:'floating', component:CeFloatingButtonComponent},
  {path:'notification', component:NotificationComponent},
  {path:'request',component:RequestComponent},
  {path:'taskOwner',component:TaskownerComponent},
  {path: 'alert-a', component: AlertAComponent},
  {path: 'acceptAfterChat', component:AcceptAfterChatOptionComponent},
  {path:'assignMobile', component:AssignmobileComponent},
  {path:'taskOwnerNotify', component:TaskownernotifyComponent},
  {path: 'inbox', component:InboxComponent}
];

@NgModule({
  imports: [

    CommonModule,RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
 
  
})
export class AppRoutingModule { }
