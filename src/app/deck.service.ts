import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Deck, DeckOfCards } from './models';
import { Observable, firstValueFrom } from 'rxjs';

const BASE = 'https://www.deckofcardsapi.com/api'

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  private http = inject(HttpClient)

  createDeck(count = 1): Promise<Deck> {
    const params = new HttpParams().set('deck_count', count)
    return firstValueFrom(
      this.http.get<Deck>(`${BASE}/deck/new/shuffle`, { params })
    )
  }

  getDeck(deckId: string): Promise<Deck> {
    return firstValueFrom(
      this.http.get<Deck>(`${BASE}/deck/${deckId}`)
    )
  }

  draw(deckId: string, count = 1): Observable<DeckOfCards> {
    const params = new HttpParams().set('count', count)
    return this.http.get<DeckOfCards>(`${BASE}/deck/${deckId}/draw`, { params })
  }
}
