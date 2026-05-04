import {
  computed,
  Injectable,
  signal,
} from '@angular/core';
import { Film } from '../../models/film.model';
import { FILMS_DATA } from '../../data/films.data';

@Injectable({
  providedIn: 'root',
})
export class Films {
  private films = signal<Film[]>([...FILMS_DATA]);
  readonly allFilms = computed(() => this.films());
  readonly favorites = computed(() => this.films().filter((film) => film.isFavorite));

  getById(id: number): Film | undefined {
    return this.films().find((film) => film.id === id);
  }

  toggleFavorite(id: number) {
    this.films.update((films) => films.map((film) => {
      if (film.id === id) {
        return {
          ...film,
          isFavorite: !film.isFavorite,
        };
      }

      return film;
    }));
  }
}
