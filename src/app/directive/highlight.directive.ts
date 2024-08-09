import { Directive, ElementRef, Input, Renderer2, OnInit } from "@angular/core";

@Directive ({
    selector: '[appHighlight]',
    standalone: true
})
export class HighlightDirective implements OnInit  {
    @Input('appHighlight') highlightColor!: string;
    constructor(private eleRef:ElementRef, private renderer:Renderer2) {
        console.log(eleRef.nativeElement);
        console.log("this.highlightColor",this.highlightColor)
        // this.renderer.setStyle(eleRef.nativeElement, 'background-color', this.highlightColor);
    }
    ngOnInit(){
        console.log("this.highlightColor",this.highlightColor)
        if (this.highlightColor) {
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.highlightColor);
        } else {
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'yellow');
        }
    }
    
}