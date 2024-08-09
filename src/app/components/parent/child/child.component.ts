import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({ 
    selector: 'app-child',
    template: `
        <ng-content></ng-content>
        <ng-content select="[body]"></ng-content>
        <ng-content select="[head]"></ng-content>
        <h1>CHild</h1>
        <p>This is about us page.</p>
        <div>{{ data }}</div>
        <button (click)="childEvent.emit('Hello from Child')">Click Me</button>
        <div #contentRef>
        <p>This is projected content</p>
        </div>
    `,
    standalone: true
})
export class ChildComponent { 
    @Input() data!: string; 
    @Output() childEvent = new EventEmitter<any>(); 
    childMethod(){
        console.log('Child Method Called');
        // this.childEvent.emit('Hello from Child');
    }
}