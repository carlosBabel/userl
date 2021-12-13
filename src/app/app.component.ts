import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userl';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
      this.httpService.getPokemon().subscribe((result) => {
        const test = result.results.map(a => a.name);
        console.log(test);
      })

  }

  counter(i: number) {
    return new Array(i);
  }
}
