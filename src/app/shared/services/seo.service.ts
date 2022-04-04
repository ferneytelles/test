import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(private meta: Meta) {}

  generateTags(config: ShareConfig): void {
    this.meta.updateTag({
      property: 'og:title',
      content: config.title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: config.image,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: config.url,
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content: config.title,
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: config.image,
    });
  }
}

export interface ShareConfig {
  title: string;
  description: string;
  image: string;
  url: string;
}
