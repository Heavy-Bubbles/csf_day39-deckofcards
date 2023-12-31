import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main.component';
import { DeckComponent } from './components/deck.component';
import { DeckService } from './deck.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  { path: '', component: MainComponent, title: 'Deck Of Cards' },
  { path: 'deck/:deckId', component: DeckComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DeckComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ DeckService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
