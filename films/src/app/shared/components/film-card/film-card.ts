import { Component, input, output } from '@angular/core';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'app-film-card',
  imports: [],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCard {
  film = input.required<Film>();
  toggleFavorite = output<number>();
  cardClick = output<number>();

  onCardClick(): void {
    this.cardClick.emit(this.film().id);
  }

  onToggleFavorite(event: Event): void {
    event.stopPropagation();
    this.toggleFavorite.emit(this.film().id);
  }

  get stars(): string {
    const rating = this.film().rating;
    const filled = Math.round(rating / 2);
    return '★'.repeat(filled) + '☆'.repeat(5 - filled);
  }
}
