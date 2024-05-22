import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JWTService } from './jwt.service';
import { Student } from './_models/entity';

export function demoInterceptorFactory(jwtService: JWTService, student: Student): HttpInterceptor {
  return {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authToken = jwtService.getToken(student);
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
    }
  };
}
