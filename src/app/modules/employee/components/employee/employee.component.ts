import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from 'src/app/modules/shared/services/employee.service';
import { NewemployeeComponent } from '../newemployee/newemployee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private snackBar : MatSnackBar, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.GetEmployee();
  }

  displayedColumns: String[] = ['id', 'taxidnumber', 'name','lastname','birthday','email','cellphone','_active','date_created', 'actions'];
  dataSource = new MatTableDataSource<EmployeeElement>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator

  //suscription y the employee service
  GetEmployee(){
    this.employeeService.GetAllEmployee() 
    .subscribe((data: any) =>{
      console.log('Data Response: ', data); 
      
      this.processEmployeeResponse(data);

    }, error =>{
      console.log('error', error);
    })
  }

  processEmployeeResponse (resp: any){
    const dataEmployee: EmployeeElement [] = [];

    if (resp.metadata[0].code == "00"){
      let ListEmployee = resp.employeeResponse.employee;

      ListEmployee.forEach((element: EmployeeElement) => {
        dataEmployee.push(element)
      });

      this.dataSource = new MatTableDataSource<EmployeeElement>(dataEmployee);
      this.dataSource.paginator = this.paginator; 
    }

  }

  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar>{
    return this.snackBar.open(message, action, {
      duration: 2000
    })
    }

  openEmployeeDialog(){
    const dialogRef = this.dialog.open(NewemployeeComponent, {
      width: '450px'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1){
        this.openSnackBar("Empleyee Saved", "Done!"); 
        this.GetEmployee();
      }
      else if(result ==2){
        this.openSnackBar("Don't Save Employee", "Error");        
      }
  });

}


}


export interface EmployeeElement {
 
  birthday: string;
  cellphone: string;
  date_created: string;
  email: string; 
  id: number;
  lastname: string;
  name: string; 
  taxidnumber: string;
  _active: boolean;
  
}
