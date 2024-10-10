import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
   contactForm = new FormGroup({
     firstName: new FormControl('Gowtham'),
     lastName: new FormControl({
      value:'Gamiir',
      disabled: true,
     }),
     email: new FormControl(),
     gender: new FormControl(),
     isMarried: new FormControl(),
     country: new FormControl(),
     address: new FormGroup({
       city: new FormControl(),
       street: new FormControl(),
       pincode: new FormControl(),
     })
   })

   onSubmit() {
    console.log(this.contactForm.value);
   }

}
