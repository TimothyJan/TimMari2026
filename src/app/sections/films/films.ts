import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomGenerator } from "../../components/random-generator/random-generator";

interface Film {
  id: string;
  name: string;
  director: string;
  year: number;
  genre: string;
  rating: string;
  description: string;
  duration: string;
  imageUrl: string;
}

@Component({
  selector: 'app-films',
  imports: [CommonModule, RandomGenerator],
  templateUrl: './films.html',
  styleUrl: './films.css',
})
export class Films {

  topFilm: Film = {
    id: 'your_name',
    name: 'Your Name',
    director: 'Makoto Shinkai',
    year: 2016,
    genre: 'Animation/Romance',
    rating: '8.4/10',
    description: 'A beautifully animated story about two strangers who find themselves mysteriously connected. This film touched our hearts and became our favorite movie to watch together.',
    duration: '1h 47m',
    imageUrl: 'assets/images/films/your_name.jpg',
  };

}
