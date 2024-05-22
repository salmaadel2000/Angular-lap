
import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/entity';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})

export class StudentDetailsComponent implements OnInit {
  student!: Student;
  studentImage: any;
  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.studentService.getStudentById(params['id']).subscribe(
        student => this.student = student
      );
    });
    this.studentService.getImageUrl().subscribe(
      (url) => {
      this.studentImage = url;
      },
      (error) => {
      console.error(error);
      }
      );
      }
    
  }

