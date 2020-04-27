import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment.prod';

export class HttpErrorInterceptor implements HttpInterceptor {

    /** 設定表頭帶token */
    httpOptions: any = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem(`${environment.production}`),
      })
    }

    constructor(
    ) { }



    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(this.httpOptions)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;

                        // // 判斷無權限
                        // if (error.status === 401) {
                        //     // 刷新會員Token
                        //     this.refreshMemberToken();
                        // } else {
                        //     // 開啟 messageModal
                        //     this.openMessageModal(error.error.message);
                        // }
                    }

                    return throwError(errorMessage);
                })
            )
    }

    /**
     * 開啟 messageModal
     *
     * @param {string} message
     * @memberof HttpErrorInterceptor
     */
    // openMessageModal(message: string) {
    //     /** modaleOptions */
    //     const modalOptions: Modal = {
    //         icon: 'icon color-base icon-report_problem',
    //         message: message
    //     }

    //     // 開啟 Modal
    //     this.modalService.open(modalOptions);
    // }

    /**
     * 刷新會員Token
     */
    // refreshMemberToken() {
    //     /** 設定表頭帶token */
    //     let httpOptions: any = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'Authorization': localStorage.getItem(`${environment.keyOfToken}`),
    //         }),
    //         withCredentials: true
    //     }

    //     // 刷新會員Token
    //     this.memberService.refreshMemberToken(httpOptions)
    //         .subscribe(data => {
    //             localStorage.setItem(`${environment.keyOfToken}`, data.token);
    //             location.reload();
    //         });
    // }
}
