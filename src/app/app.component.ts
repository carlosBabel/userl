import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userl';

  totalRecords = 100;
  pokemons: string[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
      this.httpService.getPokemon(0).subscribe((result) => {
        this.pokemons = result.results.map(a => a.name);
      })

  }

  counter(i: number) {
    return new Array(i);
  }

  paginate(event) {
    console.log(event.page)

    this.httpService.getPokemon(event.page).subscribe((result) => {
      this.pokemons = result.results.map(a => a.name);
    })
  }

  clear(x) {
    
  }
}
