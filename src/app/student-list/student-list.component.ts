import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/entity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-student-list',
  standalone:true,
  templateUrl: './student-list.component.html',
  imports: [FormsModule, CommonModule,RouterModule,RouterOutlet],
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      data => {
        this.students = data;
      },
      error => {
        console.error('Error fetching students:', error);
      }
    );
  }

  delete(id: number): void {
    this.studentService.deleteStudent(id).subscribe(
      () => {
        console.log('student deleted successfully');
      },
      error => {
        console.error('Error deleting student:', error);
      }
    );
  }
}

