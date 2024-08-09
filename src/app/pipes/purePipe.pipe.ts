import { Pipe } from '@angular/core';

@Pipe({
  name: 'capitalizeArray',
  pure: true,
  standalone: true
})

export class capitalizeArray { 
    transform(values: Array<string>): any {
        console.log("Pipe Called");
        return values.map(value => value.charAt(0).toUpperCase() + value.slice(1))
    }
}