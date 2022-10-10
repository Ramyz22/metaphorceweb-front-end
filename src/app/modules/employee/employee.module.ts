import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewemployeeComponent } from './components/newemployee/newemployee.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    NewemployeeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmployeeModule { }
