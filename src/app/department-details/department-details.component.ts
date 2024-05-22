import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/entity';
import { DepartmentService } from '../department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone:true,
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  dep!: Department;
  constructor(
    private departmentService: DepartmentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.departmentService.getDepartmentById(params['id']).subscribe(
        department => this.dep = department
      );
    });
    console.log(this.dep)
  }
}
