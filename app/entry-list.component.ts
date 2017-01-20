import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <div class="entries">
    <table class="table table-bordered table-striped">
      <thead>
      <tr>
        <th>Name</th>
        <th>Details</th>
        <th>Calories</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let entry of entries">
        <td>{{entry.name}}</td>
        <td>{{entry.details}}</td>
        <td>{{entry.calories}}</td>
      </tr>
      <tr class="warning">
        <td colspan="2"><strong>Total</strong></td>
        <td>{{sum(entries)}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  `
})

export class EntryListComponent {
  @Input() entries: Entry[];

  sum(entries: Entry[]) {
    let sum: number = 0;
    entries.forEach(function(entry) {
      sum+=entry.calories
    })
    return sum;
  }
}
