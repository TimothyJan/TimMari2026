import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./sections/header/header";
import { Footer } from './sections/footer/footer';
import { Intro } from "./sections/intro/intro";
import { Highlights } from "./sections/highlights/highlights";

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    Intro,
    Highlights
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TimMari2026');
}
