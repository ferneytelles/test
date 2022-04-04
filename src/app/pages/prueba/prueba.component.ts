import { Component, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss'],
})
export class PruebaComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.share();
  }

  share(): void {
    this.seo.generateTags({
      title: 'este titulo es para pruebas',
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, corporis nam? Aspernatur corporis laborum odit asperiores ratione ex, ab aliquam, omnis blanditiis sit harum minus voluptates a! Quam, vitae veniam.',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      url: 'https://test-two-wine.vercel.app/prueba',
    });
  }

  opened(event: any): void {
    console.log(event);
  }

  closed(event: any): void {
    console.log(event);
  }
}
