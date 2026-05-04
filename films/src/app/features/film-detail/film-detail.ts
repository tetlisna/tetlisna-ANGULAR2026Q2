import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Films } from '../../core/services/films';
import { DurationPipe } from '../../core/pipes/duration-pipe';

@Component({
  selector: 'app-film-detail',
  imports: [DurationPipe],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.scss',
})
export class FilmDetail {
  private route = inject(ActivatedRoute);
  private filmsService = inject(Films);
  private router = inject(Router);

  film = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    return this.filmsService.getById(id);
  });

  onBack(): void {
    this.router.navigate(['/']);
  }
}
