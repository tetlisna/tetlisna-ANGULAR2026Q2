import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Films } from '../../core/services/films';
import { FilmCard } from '../../shared/components/film-card/film-card';
import { AutofocusDirective } from '../../core/directives/autofocus-directive';

@Component({
  selector: 'app-home',
  imports: [
    FilmCard,
    AutofocusDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private filmsService = inject(Films);
  private router = inject(Router);

  searchQuery = signal('');

  filteredFilms = computed(() =>
    this.filmsService.allFilms().filter(film =>
      film.title.toLowerCase().includes(this.searchQuery().toLowerCase())
    )
  );

  onCardClick(id: number): void {
    this.router.navigate(['/films', id]);
  }

  onToggleFavorite(id: number): void {
    this.filmsService.toggleFavorite(id);
  }
}
