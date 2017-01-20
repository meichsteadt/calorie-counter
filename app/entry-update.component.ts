import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-update',
  template: `
  <form *ngIf="selectedEntry">
    <h3>Edit entry</h3>
    <div class="col-sm-4">
      <div class="form-group">
        <label for="name">Name</label>
        <input class="form-control" type="text" [(ngModel)]="selectedEntry.name" name="name" id="name">
      </div>
      <div class="form-group">
        <label for="details">Details</label>
        <input class="form-control" type="text" [(ngModel)]="selectedEntry.details" name="details" id="details">
      </div>
      <div class="form-group">
        <label for="calories">Calories</label>
        <input class="form-control" type="text" [(ngModel)]="selectedEntry.calories" name="calories" id="calories">
      </div>
      <button type="button" class="btn btn-default" (click)="finish()" >Submit</button>
    </div>
  </form>
  `
})

export class EntryUpdateComponent {
  @Input() selectedEntry: Entry;
  @Output() clickSender = new EventEmitter();

  finish() {
    this.clickSender.emit();
  }
}
