import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';

  id = 1;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.code();
  }

  async code(): Promise<void> {
    if (this.id >= 826) {
      alert('YA SE HAN TRAIDO TODAS LAS IMAGENES');
    } else {
      const container = document.querySelector('.content');
      const url = 'https://rickandmortyapi.com/api/character/';

      const response: any = await this.http
        .get(url + this.id)
        .pipe(map((response) => response))
        .toPromise();
      console.log(response.image);
      const img = new Image();
      img.src = response.image;
      //@ts-ignore
      container.appendChild(img as Node);

      this.id += 1;
    }
  }
}
