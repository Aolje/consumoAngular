import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeesService } from './services/employees.service';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { NewEmployeeComponent } from './employees/new-employee/new-employee.component';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/new', component: NewEmployeeComponent },
  { path: 'employees/:id/edit', component: EditEmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EditEmployeeComponent,
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
