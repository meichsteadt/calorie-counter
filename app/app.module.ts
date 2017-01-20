import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { EntryListComponent } from './entry-list.component';
import { EntryUpdateComponent } from './entry-update.component';
import { NewEntryComponent } from './new-entry.component';
import { CaloriePipe } from './calorie.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryUpdateComponent,
    NewEntryComponent,
    CaloriePipe
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
