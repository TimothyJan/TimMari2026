import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./sections/header/header";
import { Intro } from "./sections/intro/intro";

@Component({
  selector: 'app-root',
  imports: [Header, Intro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TimMari2026');
}
