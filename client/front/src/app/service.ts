
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class Service {

    baseURL: string = "http://localhost:3000/api/";

    constructor(private http: HttpClient) {
    }

    getData(string: string): Observable<any> {
        return this.http.get(this.baseURL + 'interview/magic/' + string)
    }

}