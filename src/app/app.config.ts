import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { demoInterceptorFactory } from './demo.interceptor';
import { Student } from './_models/entity'; 
import { JWTService } from './jwt.service';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useFactory: demoInterceptorFactory, deps: [JWTService, Student], multi: true }
  ]
};
