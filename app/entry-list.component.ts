import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <div class="row">
    <select class="form-control" (change)='filter($event.target.value)'>
      <option value="all" selected>All</option>
      <option value="low">Low</option>
      <option value="high">High</option>
    </select>
  </div>
  <div class="row">
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
        <tr *ngFor="let entry of entries | calories:level">
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
  </div>

  `
})

export class EntryListComponent {
  @Input() entries: Entry[];
  level: string;
  filter(level) {
    this.level = level;
  }

  sum(entries: Entry[]) {
    let sum: number = 0;
    entries.forEach(function(entry) {
      sum+=entry.calories
    })
    return sum;
  }
}
