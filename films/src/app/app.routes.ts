import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { FilmDetail } from './features/film-detail/film-detail';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'films/:id',
    component: FilmDetail,
  },
  {
    path: '**',
    component: NotFound,
  },
];
