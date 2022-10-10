import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from './components/contract/contract.component';
import { NewcontractComponent } from './components/newcontract/newcontract.component';



@NgModule({
  declarations: [
    ContractComponent,
    NewcontractComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContractModule { }
