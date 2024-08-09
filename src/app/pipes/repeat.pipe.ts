import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'repeat',
  standalone:true
})

export class RepeatPipe implements PipeTransform {
    transform(value: string, count: number, count2:number): any {
        return value.repeat(count).repeat(count2);
    }
}