import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    template:`
        <h1>Hello, Angular!{{name}}</h1>
        <img [src]="srcImage" width=100 alt="" (click)="imageClick()">
        <input type="text" [(ngModel)]="data" >
        <div>data : {{data}}</div>
        `,
    selector:"app-first-component",
    imports:[FormsModule],
    standalone:true
})
export class FirstComponent {
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