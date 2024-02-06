import { ViewChildren } from '@angular/core';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-childtoparentChild',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
   @Output() newitem = new EventEmitter<string>();

  //  @ViewChild('newitem') myEl: ElementRef;

   addNewItems(value:string){
    // console.log('+++', this.myEl.nativeElement.value);
    console.log('>>>>', value);
    this.newitem.emit(value);
   }
}