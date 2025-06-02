import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map  } from 'rxjs';

export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  location: string;
  note: number;
  about: string;
  website: string;
  category: string;
  top: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ArtisanService {
  private jsonUrl = 'assets/data/artisans.json';

  constructor(private http: HttpClient) {}

  getArtisans(): Observable<Artisan[]> {
    return this.http.get<Artisan[]>(this.jsonUrl);
  }

  getArtisanById(id: number): Observable<Artisan | undefined> {
    return this.getArtisans().pipe(
      map(artisans => {
        console.log('📦 Tous les artisans :', artisans); // debug
        return artisans.find(a => a.id === id);
      })
    );
  }
  
}
