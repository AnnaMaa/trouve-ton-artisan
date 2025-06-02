import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})

export class CookieBannerComponent {
  showBanner = false;

  constructor() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const consent = localStorage.getItem('cookie-consent');
      this.showBanner = !consent;
    }
  }

  acceptCookies() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent', 'all');
      this.showBanner = false;
    }
  }

  refuseCookies() {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      localStorage.setItem('cookie-consent', 'necessary');
      this.showBanner = false;
    }
  }
}
