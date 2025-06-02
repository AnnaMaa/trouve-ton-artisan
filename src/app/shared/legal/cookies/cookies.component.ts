import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Cookies | Trouve ton artisan');
    this.meta.updateTag({
      name: 'description',
      content: 'En savoir plus sur l’utilisation des cookies sur le site Trouve ton artisan.'
    });
  }
}
