import { NgModule } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {PagesModule} from '../app/Pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import{ CeFloatingButtonComponent } from './ce-appcomponent/ce-floating-button/ce-floating-button.component'

@NgModule({
  declarations: [AppComponent, CeFloatingButtonComponent
  ],
  entryComponents: [],
  imports: [  BrowserModule,AppRoutingModule,PagesModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen, 
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {}
