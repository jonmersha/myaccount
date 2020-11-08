import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //,Authorization: 'my-auth-token'
  })
};

export class CustomerService {
  createCustomer(customer: Customer) {
    return this.http.post<Customer>(this.baseURL, customer, httpOptions);
  }

  constructor(private http: HttpClient) {}
  baseURL: string = 'https://hullupay.herokuapp.com/cr_acc';
}
