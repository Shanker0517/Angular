import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input({ alias:'parentvarible',required: true , transform:transformFunction }) parentchildvarible:string='';
}
// alias: is an aonther name that we can give near variable declarations here for parentvarible we give as parentchildvarible
// actually the parent variable is in alias name and the new name for the parent variable is parentchildvarible

// required: true means data has to come from the parent 
// if false means data not required

// transform means transform data before rendering....
function transformFunction(value: any) {
  console.log(value)
  throw new Error('Function not implemented.');
}

