import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContractModule } from '../contract/contract.module';
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule, 
    ContractModule, 
    EmployeeModule

  ]
})
export class DashboardModule { }
