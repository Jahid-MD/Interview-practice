import { Component } from "@angular/core";

@Component({
    template:"<h1>Hello, Angular!</h1>",
    selector:"app-first-component",
    standalone:true
})
export class FirstComponent {
    name: string = "John Doe";
    constructor() {}
 }