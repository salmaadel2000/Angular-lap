import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/entity';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})

export class AddStudentComponent  {
  student: Student = new Student(0, "", 0, "");
  
  constructor(
    private studentService: StudentService,
    private router: Router
  ) {}

  addStudent(): void {
    const formData = new FormData();
    formData.append('id', this.student._id);
    formData.append('name', this.student.name);
    formData.append('department', this.student.department.toString());
    formData.append('image', this.student.image);

    this.studentService.createStudent(formData)
      .subscribe(createdStudent => {
        this.student=createdStudent
      });
      
  }

  onImgSelected(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.student.image = file;
    }
  }
}
