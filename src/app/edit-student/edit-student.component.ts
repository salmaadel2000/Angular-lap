
import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/entity';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent implements OnInit {
  student: Student = new Student(0, " ", 0, " ");

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.studentService.getStudentById(params['id']).subscribe(
        student => this.student = student
      );
    });
  }

  updateStudent(): void {
    const formData = new FormData();
  
    formData.append('name', this.student.name);
    formData.append('department', this.student.department.toString()); 
    formData.append('image', this.student.image);
  
    this.studentService.updateStudent(this.student._id, formData)
      .subscribe(updatedStudent => {
        this.student = updatedStudent; 
      });
  }
  onImgSelected(event:any){
      if(event.target.files.length>0){
        const file=event.target.files[0];
        this.student.image=file
      }
  }
  
}