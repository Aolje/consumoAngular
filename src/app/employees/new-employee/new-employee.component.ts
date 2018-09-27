import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employees.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  employee: Employee;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employee = new Employee();
  }
  onSubmit(){
    this.employeesService.newEmployee(this.employee);
  }

}
