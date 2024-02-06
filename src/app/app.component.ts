import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//@input
import { ParentComponent } from './parent-child-via-Input/parent/parent.component';
import { ChildComponent } from './parent-child-via-Input/child/child.component';
//@output
import { ParentComponent as ctopP } from './child-parent-via-Ouput/parent/parent.component';
import { ChildComponent as ctopC } from './child-parent-via-Ouput/child/child.component';
//@viewchild
import { ParentviewCompComponent } from './child-parent-via-ViewChild/parentview-comp/parentview-comp.component';
import { ChildviewCompComponent } from './child-parent-via-ViewChild/childview-comp/childview-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ParentviewCompComponent,ChildviewCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataSharing-Parent-to-Child';
}
