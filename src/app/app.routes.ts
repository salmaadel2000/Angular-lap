import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"department",component:DepartmentComponent,
        children:[
            { path: 'details/:id', component: DepartmentDetailsComponent },
            {path:"edit/:id",component:EditDepartmentComponent},
            {path:"add",component:AddDepartmentComponent},
        ]
    },
    {path:"studentlist",component:StudentListComponent,canActivate: [AuthGuard],children:[
        { path: 'details/:id', component: StudentDetailsComponent ,canActivate: [AuthGuard]},
            {path:"edit/:id",component:EditStudentComponent,canActivate: [AuthGuard]},
            {path:"add",component:AddStudentComponent,canActivate: [AuthGuard]},
    ]},
    {path:"login",component:LoginComponent}
];




