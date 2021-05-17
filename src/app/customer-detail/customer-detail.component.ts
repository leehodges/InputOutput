import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css'],
})
export class CustomerDetailComponent implements OnInit {
  //The customer property is the input property decorated with Input.
  @Input() customer: Customer = new Customer();
  //customerChange is decorated as the output property of type EventEmitter
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  constructor() {}

  ngOnInit() {}

  // Whenever the user updates the customer,
  // we raise the event customerChange.
  // We pass the updated customer as the argument to it.
  updateEvent() {
    debugger;
    this.customerChange.emit(this.customer);
  }
}

// Users can edit the customer. Once finished they will click the update button.
// The update method raises the customerChange event. We pass the customer as the
// argument to the event. The parent component listens to the event and receives the data.
