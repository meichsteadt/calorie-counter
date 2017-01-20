import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'new-entry',
  template: `
  <button class="btn btn-default" (click)="addEntry()">New Entry</button>
  <div *ngIf="newEntry">
  <h3>New Entry</h3>
    <form (ngSubmit)="onSubmit()" #entryForm="ngForm">
      <div class="row">
        <div class="form-group col-sm-4">
          <label for="brand">Name</label>
          <input class="form-control" type="text" [(ngModel)]="entry.name" name="name" id="name" #name="ngModel" required>
        </div>
        <div class="form-group col-sm-4">
          <label for="flavor">Details</label>
          <input class="form-control" type="text" [(ngModel)]="entry.details" name="details" id="details"  #details="ngModel" required>
        </div>
        <div class="form-group col-sm-4">
          <label for="price">Calories</label>
          <input class="form-control" type="number" [(ngModel)]="entry.calories" name="calories" id="calories" #calories="ngModel" required>
        </div>
      </div>
      <button class="btn btn-default" type="submit" [disabled]="!entryForm.form.valid">Submit</button>
      <button class="btn btn-default" type="button" (click)="cancel()">Cancel</button>
    </form>
  </div>
  `
})

export class NewEntryComponent {
  @Input() entries: Entry[];
  newEntry = false;
  entry = new Entry('', '', null)

  onSubmit() {
    this.entries.push(this.entry);
    this.entry = new Entry('','', null);
    this.newEntry = false;
  }

  addEntry() {
    this.newEntry = true;
  }

  cancel() {
    this.newEntry = false;
  }
}
