import { Customer } from './../../model/customer';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: Customer[];
  constructor() {}

  ngOnInit(): void {}
  @Output() newCustomer: EventEmitter<any> = new EventEmitter();
  customerId: number;
  phoneNumber: string;
  userName: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
  maritalStatus: string;
  gender: string;
  motherFullName: string;
  emailId: string;
  birthDate: string;

  onSubmit() {
    console.log('add new Customer');
    const customers = {
      customerId: this.customerId,
      phoneNumber: this.phoneNumber,
      userName: this.userName,
      password: this.password,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      maritalStatus: this.maritalStatus,
      gender: this.gender,
      motherFullName: this.motherFullName,
      emailId: this.emailId,
      birthDate: this.birthDate
    };
    this.newCustomer.emit(customers);
  }
}
