import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/entity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../department.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-department',
  imports: [FormsModule, CommonModule,RouterModule,RouterOutlet],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  constructor(public DepartmentService: DepartmentService) {}
  sub:Subscription|null=null
  dep: Department[]=[];
  
  ngOnInit(): void {
    this.sub=this.DepartmentService.getAllDepartments().subscribe({
    next:data=>{this.dep=data}
});

  }
  delete(id: number): void {
    this.DepartmentService.deleteDepartment(id).subscribe(
      () => {
        console.log('Department deleted successfully');
      },
      error => {
        console.error('Error deleting department:', error);
      }
    );
  }
}

