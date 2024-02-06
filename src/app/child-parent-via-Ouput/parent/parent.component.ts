import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-childtoparentParent',
  standalone: true,
  imports: [CommonModule,ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  items: string[];
  constructor() {
    this.items=['item1', 'item2'];
  }  
  addItem(newitem: any) {
    console.log('><><>');
    console.log('><><>', newitem);
    this.items.push(newitem);
    console.log(this.items);
  }
}
