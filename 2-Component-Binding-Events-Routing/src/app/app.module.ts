import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { ForLoopClickComponent } from './for-loop-click/for-loop-click.component';
import { TemplateComponent } from './template/template.component';
import { EventsComponent } from './events/events.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule} from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    ContactComponent,
    ForLoopClickComponent,
    TemplateComponent,
    EventsComponent,
    ToDoListComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
