import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanService, Artisan } from '../../../core/artisan.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ArtisanCardComponent } from '../../../shared/artisan-card.component';


@Component({
  selector: 'app-artisan-list',
  standalone: true,
  imports: [CommonModule, RouterModule,ArtisanCardComponent],
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss']
})
export class ArtisanListComponent implements OnInit {
  artisans: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
 
  constructor(
    private artisanService: ArtisanService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.artisanService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisans = data;
  
      this.route.queryParams.subscribe((params: any) => {
        const q = (params['q'] || '').toLowerCase();
        const cat = (params['categorie'] || '').toLowerCase();
      
        this.filteredArtisans = q
          ? this.artisans.filter(a =>
              [a.name, a.specialty, a.location].some(field =>
                field.toLowerCase().includes(q)
              )
            )

            : cat
            ? this.artisans.filter(a =>
                a.category?.toLowerCase() === cat 
              )
          : this.artisans;
      });
      
    });
    
  }
  
}
  
