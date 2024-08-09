import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: "[appHidden]",
    standalone: true
})
export class HiddenDirective {
    constructor(private eleF: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.renderer.removeChild(this.eleF.nativeElement.parentNode, this.eleF.nativeElement);
    }
}
