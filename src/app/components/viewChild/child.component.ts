import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div #contentRef>
      <p>This is projected content</p>
    </div>
  `,
    standalone: true
})
export class ChildComponent {}
