import { AfterContentInit, Component, ContentChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <ng-content></ng-content>
  `,
  standalone: true,
})
export class parentComponent implements AfterContentInit {
  @ContentChild('contentRef') contentElement!: ElementRef;

  ngAfterContentInit() {
    console.log('Content Element:', this.contentElement.nativeElement);
  }
}
