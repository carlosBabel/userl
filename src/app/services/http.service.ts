import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPokemon(pagina: number): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${(pagina) * 5}`);
  }
}
