import { Component } from '@angular/core';
import { ChildComponent } from './child.component';
import { parentComponent } from './parent.component';

@Component({
    selector: 'app-content',
    template: `
        <app-parent>
        <div #contentRef>
      <p>This is projected content</p>
    </div>
        </app-parent> 
    `,
    standalone: true,
    imports: [ChildComponent,parentComponent]
})
export class viewContentComponent {
    constructor() {}
}
