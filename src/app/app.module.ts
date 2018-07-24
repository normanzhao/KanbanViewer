import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { KanbanviewerComponent } from './kanbanviewer/kanbanviewer.component';
import { KanbanviewerService } from './kanbanviewer.service'; 

@NgModule({
  declarations: [
    AppComponent,
    KanbanviewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
