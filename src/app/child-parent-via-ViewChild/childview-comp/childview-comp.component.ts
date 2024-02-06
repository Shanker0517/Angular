import { Component } from '@angular/core';

@Component({
  selector: 'app-childview-comp',
  standalone: true,
  imports: [],
  templateUrl: './childview-comp.component.html',
  styleUrl: './childview-comp.component.css'
})
export class ChildviewCompComponent {
  sum!: number;
  differnce!: number;
  // data:string='ddd'

  add(num1:number,num2:number){
    this.sum=num1+num2;
    console.log(this.sum);
    return this.sum
  }
  differ(num1:number,num2:number){
    this.differnce=num1-num2;
    // console.log(this.differnce);
    return this.differnce
  }

}
