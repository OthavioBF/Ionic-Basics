import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor() { }

  ngOnInit() {}

  submit() {
    if (!this.name || !this.email || !this.message) {
      return alert('Please fill the respective fields')
    }

    console.log(this.name, this.email, this.message)
  }

}
