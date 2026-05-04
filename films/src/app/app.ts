import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { Breadcrumbs } from "./shared/components/breadcrumbs/breadcrumbs";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    Breadcrumbs,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
