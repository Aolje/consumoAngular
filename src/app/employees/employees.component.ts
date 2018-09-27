import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employees.service';
import { Employee } from '../models/employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getEmployees().subscribe(
      (response: any[]) => {
        console.log(response)
        this.employees = response;
      }
    )
  }

}
