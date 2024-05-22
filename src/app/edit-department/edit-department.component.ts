import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/entity';
import { DepartmentService } from '../department.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-department.component.html',
  styleUrl: './edit-department.component.css'
})

export class EditDepartmentComponent implements OnInit {
  dep!: Department;

  constructor(
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.departmentService.getDepartmentById(params['id']).subscribe(
        department => this.dep = department
      );
    });
  }

  updateDepartment(): void {
    this.departmentService.updateDepartment(this.dep).subscribe(d=>this.dep=d)
}
}
