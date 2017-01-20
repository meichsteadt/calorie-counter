import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <div class="row">
    <div class="col-sm-12">
      <select class="form-control" (change)='filter($event.target.value)'>
        <option value="all" selected>All</option>
        <option value="low">Low</option>
        <option value="high">High</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <div class="entries">
        <table class="table table-bordered">
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
            <td [class]='colors(entry)'>{{entry.calories}}</td>
            <td class="transparent"><a href="#" (click)="editEntry(entry)"><i class="fa fa-pencil"></i> edit</a></td>
          </tr>
          <tr class="info">
            <td colspan="2"><strong>Total</strong></td>
            <td>{{sum(entries)}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <entry-update [selectedEntry]="selectedEntry" (clickSender)="finish()"></entry-update>
    </div>
  </div>

  `
})

export class EntryListComponent {
  @Input() entries: Entry[];
  level: string;
  selectedEntry: Entry = null;
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

  editEntry(entry) {
    this.selectedEntry = entry;
  }

  finish() {
    this.selectedEntry = null;
  }

  colors(entry: Entry) {
    if(entry.calories > 1200) {
      return "text-danger";
    }
    else if (entry.calories < 800) {
      return "text-success";
    }
    else {
      return "";
    }
  }
}
