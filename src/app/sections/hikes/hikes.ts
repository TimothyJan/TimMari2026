import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomGenerator } from "../../components/random-generator/random-generator";

interface Hike {
  id: string;
  name: string;
  location: string;
  difficulty: string;
  description: string;
  distance: string;
  elevationGain: string;
  imageUrl: string;
}

@Component({
  selector: 'app-hikes',
  imports: [CommonModule, RandomGenerator],
  templateUrl: './hikes.html',
  styleUrl: './hikes.css',
})
export class Hikes {
  topHike: Hike = {
    id: 'lanikai_pillbox',
    name: "Ka'iwa Ridge (Lanikai Pillbox) Trail",
    location: "Kailua, Oahu",
    difficulty: 'Moderate',
    description: "This hike along Ka'iwa Ridge offers great views of Lanikai and Kailua.",
    distance: '1.7 miles',
    elevationGain: '613 ft',
    imageUrl: "assets/images/hikes/lanikai_pillbox.jpg",
  };
}
