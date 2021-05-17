import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [
    {
      customerNumber: 1,
      name: 'John Smith',
      address: '123 Evergreen Terrace',
      city: 'Paducah',
      state: 'KY',
      country: 'USA',
    },
    {
      customerNumber: 2,
      name: 'Sally Jones',
      address: '123 N Street',
      city: 'West Plains',
      state: 'MO',
      country: 'USA',
    },
    {
      customerNumber: 3,
      name: 'Zach Young',
      address: '123 Broadway',
      city: 'Cape Girardeau',
      state: 'MO',
      country: 'USA',
    },
    {
      customerNumber: 4,
      name: 'Chris Carnell',
      address: '123 West Street',
      city: 'Sikeston',
      state: 'MO',
      country: 'USA',
    },
    {
      customerNumber: 5,
      name: 'Jackie Jones',
      address: '123 South Lane',
      city: 'Springfield',
      state: 'IL',
      country: 'USA',
    },
  ];

  selectedCustomer: Customer = new Customer();

  constructor() {}

  ngOnInit() {}

  // gets the customer as its argument. We clone it & assign it to selectedCustomer
  showDetails(customer: Customer) {
    this.selectedCustomer = Object.assign({}, customer);
  }

  // we clone the customer and send it to the child component
  update(customer: Customer) {
    debugger;
    console.log(customer);
    const cust = this.customers.find(
      (e) => e.customerNumber == customer.customerNumber
    );
    Object.assign(cust, customer);
    alert(
      'Customer Saved and table should reflect changes thanks to EventEmitter and being Outputted'
    );
  }
}
