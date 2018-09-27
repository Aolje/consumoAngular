import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../models/employees.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employee: Employee;
  id :number;
  constructor(private employeesService: EmployeesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employee = new Employee();
    this.id = this.route.snapshot.params.id;
    this.employeesService.getEmployee(this.id).subscribe(
      (response: any) =>{
        this.employee.name = response.name;
        this.employee.age = response.age;
        this.employee.email = response.email;
      }
    )
  }
  onSubmit(){
    this.employeesService.updateEmployee(this.id, this.employee);
  }

}
