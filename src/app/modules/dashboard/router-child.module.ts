import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from '../contract/components/contract/contract.component';
import { EmployeeComponent } from '../employee/components/employee/employee.component';
import { HomeComponent } from './home/home.component';



export const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: 'contract', component: ContractComponent}
]


@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class RouterChildModule { }
