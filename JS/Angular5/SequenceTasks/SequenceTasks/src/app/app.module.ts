import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
//import { Observable } from 'rxjs/Observable';
import { Service } from './Service';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ContainerComponent } from './container/container.component';
import { InContainerComponent } from './in-container/in-container.component';
import { FormComponent } from './form/form.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContainerComponent,
    InContainerComponent,
    FormComponent

  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [HttpClientModule,Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
