import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddStudentValidationComponent } from './add-student-validation/add-student-validation.component';
import { AddStudentReactiveFormComponent } from './add-student-reactive-form/add-student-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    AddStudentValidationComponent,
    AddStudentReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
