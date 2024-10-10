// import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
// import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Component, Input, OnChanges, OnInit, DoCheck } from '@angular/core';
import { Component, Input, OnChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
// export class HeadingComponent implements OnChanges, OnInit{
//      @Input() text = ''
//      ngOnChanges(changes: SimpleChanges): void {
//         if(!changes['text'].firstChange) {
//            console.log('You are modified the original value');
//            console.log("ng onchanges called", changes['text'].currentValue);
//         }  
//       }

//       ngOnInit(): void {
//         console.log('ngOnInit called!!!')
//       }
// }
export class HeadingComponent implements OnChanges, OnInit, DoCheck, OnDestroy{
     noOfTitles = 0;
     @Input() text:string[] = []
     ngOnChanges(): void {
           console.log("ng onchanges called")
      }
      ngOnInit(): void {
        console.log('ngOnInit called!!!')
        this.text.push('FirstTitle');
        this.noOfTitles = 1
      }
      ngDoCheck(): void {
        if(this.text.length > this.noOfTitles) {
           console.log("you are  modifimg the original value");
           console.log('ngDoCheck called!!!')
           this.noOfTitles++;
        }
      }
      ngOnDestroy(): void {
        console.log('ngOnDestroy called!!!')
      }
}
