import { Injectable } from '@angular/core';
import { Department } from './_models/entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
private baseurl="http://localhost:8080/departments/"
  constructor(private http: HttpClient) { }

  getAllDepartments() {
    return this.http.get<Department[]>(this.baseurl);
  }

  getDepartmentById(id: number) {
    return this.http.get<Department>(`http://localhost:8080/departments/${id}`);
  }

  createDepartment(department: Department) {
    return this.http.post<Department>(this.baseurl, department);
  }

  updateDepartment(department: Department) {
    return this.http.put<Department>(`http://localhost:8080/departments/${department._id}`, department);
  }

  deleteDepartment(id: number) {
    return this.http.delete<void>(`http://localhost:8080/departments/${id}`);
  }
}
