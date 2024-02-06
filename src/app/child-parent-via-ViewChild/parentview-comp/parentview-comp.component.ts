import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildviewCompComponent } from '../childview-comp/childview-comp.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parentview-comp',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildviewCompComponent],
  templateUrl: './parentview-comp.component.html',
  styleUrl: './parentview-comp.component.css'
})
export class ParentviewCompComponent implements AfterViewInit {
  //ChildviewCompComponent so i have given in @viewChild  
  // refer this 
  // https://dev.to/danielpdev/how-to-use-viewchild-decorator-in-angular-9-i0 
  @ViewChild(ChildviewCompComponent) ChildComponentData!: ChildviewCompComponent;
  input1!: number;
  input2!: number;
  onchange(event: any) {
    const { name, value } = event.target
    if (name === 'input1') {
      this.input1 = parseInt(value)
      // console.log(typeof value)
    }
    else {
      this.input2 = parseInt(value)
    }
  }
  addNumbers(input1: number, input2: number) {
    console.log(this.ChildComponentData.add(input1, input2))

  }
  subNumbers(input1: number, input2: number) {
    console.log(this.ChildComponentData.differ(input1, input2))
  }
  ngAfterViewInit() {
    // ngAfterViewInit() is called after a component's view, and its children's views, are created.
    // Its a lifecycle hook that is called after a component's view has been fully initialized.
    console.log(this.ChildComponentData, 'ngAfterViewInit parent with child ');
  }
}
