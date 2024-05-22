import { Component } from '@angular/core';
import { JWTService } from '../jwt.service';
import { Router, ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { Student, Auth } from '../_models/entity';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  student: Student = new Student(0, "", 0, "");

  constructor(
    private jwtService: JWTService,
    private router: Router
  ) {}

  login(): void {
    this.jwtService.getToken(this.student).subscribe(
      (response: Auth) => {
        console.log('Token:',response.token);
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.data._id);
        console.log(response.data.name);
        const studentId = response.data._id;
        this.router.navigateByUrl(`/studentlist/details/${studentId}`);
        console.log(this.jwtService.getTokenFromLocalStorage())
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}

