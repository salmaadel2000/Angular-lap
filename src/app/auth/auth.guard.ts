import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JWTService } from '../jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JWTService, private router: Router) {}

  canActivate(): boolean {
    const token = this.jwtService.getTokenFromLocalStorage();
    const studentId = this.jwtService.getCurrentStudentId();
    
    if (token && studentId) {
      return true; 
    } else {
      this.router.navigateByUrl('/login'); 
      return false;
    }
  } 
}
