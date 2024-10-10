import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  
  bikes:string[] = [];

  bikeDataUpdated(bikesData:string[]) {
      this.bikes = bikesData;
  }

}
