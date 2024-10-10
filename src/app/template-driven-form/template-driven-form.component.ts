import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  
  countryList: Country[] = [
    new Country('1', 'United States'),
    new Country('2', 'Canada'),
    new Country('3', 'United Kingdom'),
    new Country('4', 'France'),
  ];

  contact!: Contact;

  ngOnInit(): void {
      this.contact = {
        firstName: 'Gowtham',
        lastName: 'Gambir',
        email: 'gg@example.com',
        gender: 'male',
        isMarried: true,
        country: '2',
        address: {
          city: 'chennai',
          street: 'gandhi st',
          pincode: '605009'
        }
      }
  }


  onSubmit(formData: NgForm) {
    console.log(formData.value);
    
  }
}

class Country {
  id:string;
  name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Contact {
  firstName!:string;
  lastName!: string;
  email!: string;
  gender!:string;
  isMarried!:boolean;
  country!: string;
  address!: {
    city:string;
    street:string;
    pincode:string;
  };
}