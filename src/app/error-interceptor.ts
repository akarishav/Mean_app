import { HttpInterceptor , HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { catchError, throwError } from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import { Injectable } from "@angular/core";
import { ErrorComponent } from "./error/error.componenet";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private dialog: MatDialog){}

  intercept(req: HttpRequest<any>, next: HttpHandler){
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "An unkknown ugvhbjhghv error occured";
        if(error.error.message){
          errorMessage = error.error.message;
        }
        this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
        return throwError(error);
      })
    );
  }
}
