import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable()
export class EmployeesService {
    url: string = '/employees';
    suffix: string = '.json';

    constructor(private http: Http, private router: Router, private route: ActivatedRoute) {

    }

    getEmployees() {
        return this.http.get(this.url + this.suffix).pipe(map(
            (response: Response) => {
                console.log(response)
                return response.json();
            }))
    }
    getEmployee(id: number) {
        return this.http.get(this.url + '/' + id + this.suffix).pipe(map(
            (response: Response) => {
                return response.json();
            }))
    }

    newEmployee(body: any) {
        this.http.post(this.url, body).subscribe(
            (response) => {
                alert('El empleado fue satisfactoriamente creado');
                this.router.navigate(['/employees']);
            },
            error => console.log(error)
        )
    }
    editEmployee(body: any) {
        this.http.post(this.url, body).subscribe(
            (response) => {
                alert('El empleado fue satisfactoriamente editado');
                this.router.navigate(['/employees']);
            },
            error => console.log(error)
        )
    }
    updateEmployee(id: number, body: any) {
        this.http.get(this.url + '/' + id + this.suffix, body).subscribe(
            (response) => {
                alert('El empleado fue satisfactoriamente modificado');
                this.router.navigate(['/employees']);
            },
            error => console.log(error)
        )

    }
}