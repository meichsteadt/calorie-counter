import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './entry.model';

@Pipe({
  name: 'calorie',
  pure: false
 })

export class CaloriePipe implements PipeTransform {
  transform(input: Entry[]) {
    return input;
  }
}
