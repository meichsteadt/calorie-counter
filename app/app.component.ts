import { Component } from '@angular/core';
import { Entry } from './entry.model'
@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">Caloreally? You're gonna eat that?</h1>
    </div>
    <entry-list [entries]="entries"></entry-list>
    <new-entry [entries]="entries"></new-entry>
  </div>
  `
})

export class AppComponent {
  entries: Entry[] = [
    new Entry('Mexican food', 'Delicious mexican from a food truck', 800),
    new Entry('Gyro salad', 'Same thing I get every day', 550),
    new Entry('Protein Shake', 'Quickest breakfast there is', 380)
  ]
}
