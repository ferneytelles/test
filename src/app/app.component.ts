import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'test';

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'este titulo es para pruebas',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, corporis nam? Aspernatur corporis laborum odit asperiores ratione ex, ab aliquam, omnis blanditiis sit harum minus voluptates a! Quam, vitae veniam.',
      image:
        'https://www.alvantia.com/wp-content/uploads/2018/10/imagen-Angular-2.jpg',
      url: 'https://test-two-wine.vercel.app/prueba',
    });
  }
}
