import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './components/userlist/userlist/userlist.component';
import { SearchbarComponent } from './components/searchbar/searchbar/searchbar.component';
import { FiltersComponent } from './components/filters/filters/filters.component';
import { TeamComponent } from './components/team/team/team.component';
import { TeamdetailsComponent } from './components/teamdetails/teamdetails/teamdetails.component';
import { UsercardComponent } from './components/userlist/usercard/usercard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserHighlitedDirective } from './Directives/user-highlited.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    SearchbarComponent,
    FiltersComponent,
    TeamComponent,
    TeamdetailsComponent,
    UsercardComponent,
    UserHighlitedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
