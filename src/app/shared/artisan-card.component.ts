import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../core/artisan.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-artisan-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './artisan-card.component.html',
  styleUrls: ['./artisan-card.component.scss']
})
export class ArtisanCardComponent {
  @Input() artisan!: Artisan;

  get fullStars(): number[] {
    return Array(Math.round(this.artisan?.note || 0)).fill(0);
  }

  get emptyStars(): number[] {
    return Array(5 - Math.round(this.artisan?.note || 0)).fill(0);
  }
}
