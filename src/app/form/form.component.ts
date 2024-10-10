import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() bikesAdded:EventEmitter<string[]> = new EventEmitter();
   bikes:string[] = [];
   bikeName = "";
   addBike() {
     this.bikes.push(this.bikeName);
     this.bikeName = "";  // Clear input field after adding a bike
     console.log(this.bikes);
     this.bikesAdded.emit(this.bikes);
   }
}
