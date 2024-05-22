import { Injectable } from '@angular/core';
import { Student } from './_models/entity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private baseurl="http://localhost:8080/students"
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<Student[]>(this.baseurl);
  }

  getStudentById(id: number) {
    return this.http.get<Student>(`http://localhost:8080/students/${id}`);
  }

  createStudent(formData:FormData) {
    return this.http.post<Student>(this.baseurl, formData);
  }

  updateStudent(id: number, formData: FormData) {
    return this.http.put<Student>(`${this.baseurl}/${id}`, formData);
  }

  deleteStudent(id: number) {
    return this.http.delete<void>(`http://localhost:8080/students/${id}`);
  }
  getImageUrl() {
    return this.http.get<string>("http://localhost:8080/students/");
    }
}
