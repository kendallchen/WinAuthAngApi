import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../model/ICustomer';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
    private customerList = new BehaviorSubject<ICustomer[] | null>(null);
    customerList$ = this.customerList.asObservable();

    readonly url = `${environment.apiCustomer}`;

    constructor(private http:HttpClient) { 
    }

    //get the list of customers
    get(){
        this.http.get<ICustomer[]>(this.url).pipe(
            ).subscribe(result => {
                if (result)
                    this.customerList.next(result)
            });
    }

    //add customer
    add(customer: ICustomer){
        this.http.post<ICustomer>(this.url, customer).subscribe(data => {
            let customer = data;
            if (customer.customerId > 0)  //if customer added successfully
                this.get();  //update the list of customers
        });
    }

    //update customer
    update(customer: ICustomer){
        this.http.put<ICustomer>(this.url + '\\' + customer.customerId, customer).subscribe(data => {
            let customer = data;
            if (customer.customerId > 0)  //if customer updated successfully
                this.get();  //update the list of customers
        });
    }

    delete(customer: ICustomer) {
        this.http.delete<number>(this.url + '\\' + customer.customerId).subscribe(data => {
            if (data > 0) //if deleted successfully
                this.get();  //update the list of customers
        });        
    }
    
}