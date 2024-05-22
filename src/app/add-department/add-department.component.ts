import { Component } from '@angular/core';
import { Department } from '../_models/entity';
import { DepartmentService } from '../department.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {
  newDepartment: Department=new Department(0,"","") ;

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  save(){
    this.departmentService.createDepartment(this.newDepartment).subscribe(
      res=>{
        this.router.navigateByUrl("/department");
      }
    )
}
}
