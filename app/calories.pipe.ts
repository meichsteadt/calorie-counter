import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './entry.model';

@Pipe({
  name: 'calories',
  pure: false
 })

export class CaloriesPipe implements PipeTransform {
  transform(input: Entry[], level) {
    if(level === "low") {
      return input.filter(function(entry) {
        return entry.calories < 500;
      })
    }
    else if (level === "high") {
      return input.filter(function(entry) {
        return entry.calories > 500;
      })
    }
    else {
      return input;
    }
  }
}
