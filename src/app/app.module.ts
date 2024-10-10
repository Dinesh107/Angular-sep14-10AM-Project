import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world-component';
import { HelloStudentsComponent } from './hello-students/hello-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { HeadingComponent } from './heading/heading.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  // declarations: [AppComponent, HelloWorldComponent, HelloStudentsComponent],
  // declarations: [AppComponent, HelloStudentsComponent, FormComponent, ListComponent, HeadingComponent, TemplateDrivenFormComponent, ReactiveFormComponent
  // ],
  declarations: [
    AppComponent, 
    ListComponent,
    TemplateDrivenFormComponent,
    HelloStudentsComponent, 
    FormComponent,
    ReactiveFormComponent,
  ],
  // imports: [BrowserModule, AppRoutingModule, FormsModule,
  //   ReactiveFormsModule,
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
