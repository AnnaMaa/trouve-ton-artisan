import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../../../core/artisan.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisansDuMois: Artisan[] = [];

  constructor(private artisanService: ArtisanService) {
    console.log('ArtisanService injecté', artisanService);
  }

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe(data => {
      
      this.artisansDuMois = data.slice(0, 3);
    });
  }
}

