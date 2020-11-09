import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

    readonly url = `${environment.apiAccount}`;

    constructor(private http:HttpClient) { 
    }

    //get the user's windows account from api
    get(): Observable<string> {
        return this.http.get(this.url, {responseType: 'text'});
    }
}