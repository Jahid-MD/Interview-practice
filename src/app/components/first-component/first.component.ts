import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "../../directive/highlight.directive";
import { HiddenDirective } from "../../directive/hidden.directive";
import { CapitalizePipe } from "../../pipes/capitalize.pipe";
import { RepeatPipe } from "../../pipes/repeat.pipe";
import { capitalizeArray } from "../../pipes/purePipe.pipe";
import { ParentComponent } from "../parent/parent.component";

@Component({
    template:`
        <h1 
        [appHighlight]="'red'"
        >Hello, Angular!{{name | repeat:3:3}}</h1>
        <!-- <img appHidden [src]="srcImage" width=100 alt="" (click)="imageClick()"> -->
        <input type="text" [(ngModel)]="data" >
        <div>data : {{data | capitalize}}</div>
        @for (value of arr | capitalizeArray; track  value) {
            <p>{{value}}</p>
        }
        <app-parent></app-parent>
        `,
    selector:"app-first-component",
    imports:[FormsModule, HighlightDirective, HiddenDirective,CapitalizePipe, RepeatPipe, capitalizeArray,ParentComponent],
    standalone:true
})
export class FirstComponent {
    arr = ["apple", "banana", "cherry"];
    name: string = "John Doe";
    srcImage: string = "favicon.ico";
    data:string="sdfsdf";
    constructor() {
        
    }

    ngDoCheck() {console.log("ngDoCheck");console.log(this.data)} 

    imageClick() {
        console.log("Image Clicked");
        // this.srcImage = "favicon.ico"; // Change the image source
    }
}