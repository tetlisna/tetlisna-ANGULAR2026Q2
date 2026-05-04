import { Component, computed, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Films } from '../../../core/services/films';

interface Breadcrumb {
  label: string;
  url: string | null;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  private router = inject(Router);
  private filmsService = inject(Films);

  private currentUrl = signal(this.router.url);

  constructor() {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.currentUrl.set(e.urlAfterRedirects);
      }
    });
  }

  breadcrumbs = computed<Breadcrumb[]>(() => {
    const url = this.currentUrl();
    const filmMatch = url.match(/^\/films\/(\d+)/);

    if (filmMatch) {
      const film = this.filmsService.getById(+filmMatch[1]);
      return [
        { label: 'Home', url: '/' },
        { label: film?.title ?? 'Film', url: null },
      ];
    }

    return [{ label: 'Home', url: null }];
  });
}
