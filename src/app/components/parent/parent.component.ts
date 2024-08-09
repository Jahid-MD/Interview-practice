import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
    selector: 'app-parent',
    template: `
    <h2>Second Component</h2>
    <app-child 
        [data]="data"
        (childEvent)="childEvent($event)"
    >
    <!-- <p>This is Child Component.</p>
    <p head>This is Parent Component.</p>
    <p body>This is Parent Body.</p> -->
    </app-child>
    <button (click)="callChildMethod()"> CLICK</button>
    `,
    standalone: true,
    imports: [ChildComponent]
 })
export class ParentComponent {
    @ViewChild(ChildComponent) childComponent!: ChildComponent;
    data: string = "Hello from Parent Component";
    childEvent(event:any) {
        console.log("Child Event Received",event);
    }
    callChildMethod() {
        this.childComponent.childMethod();
      }
}