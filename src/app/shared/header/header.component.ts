import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchTerm = '';
  menuOuvert = false;
  isMobile = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.detectScreenSize(); 
  }

  @HostListener('window:resize')
  onResize(): void {
    this.detectScreenSize();
  }

  private detectScreenSize(): void {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) {
        this.menuOuvert = true;
      } else {
        this.menuOuvert = false;
      }
    }
  }

  onSearch(): void {
    const term = this.searchTerm.trim();
    if (term) {
      this.router.navigate(['/categorie'], {
        queryParams: { q: term }
      });
      this.searchTerm = '';
    }
  }
}