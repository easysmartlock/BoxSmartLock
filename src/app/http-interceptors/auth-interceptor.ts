import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return from(this.auth.get())
                .pipe(
                    switchMap(authToken => {
                        console.log(authToken);
                        if (authToken != null && !req.headers.has('Authorization')) {
                            const authReq = req.clone({
                                headers: req.headers.set('Authorization', `Bearer ${authToken.value}`)
                            });
                            return next.handle(authReq);
                        } else {
                            return next.handle(req);
                        }
                    })
                );
    }
}