import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomGenerator } from "../../components/random-generator/random-generator";

interface Restaurant {
  id: string;
  name: string;
  location: string;
  cuisine: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-restaurants',
  imports: [CommonModule, RandomGenerator],
  templateUrl: './restaurants.html',
  styleUrl: './restaurants.css',
})
export class Restaurants {
  restaurantList: Restaurant[] = [
    {
      id: "adela's_country_eatery",
      name: "Adela's Country Eatery",
      location: 'Kaneohe HI',
      cuisine: 'Noodle Shop',
      description: 'Comfy carry-out option spotlighting homemade Hawaiian pasta, plus Asian & American eats.',
      imageUrl: "assets/images/restaurants/adela's_country_eatery.jpg",
    },
    {
      id: 'sushi_gen',
      name: 'Sushi Gen',
      location: 'Los Angeles, CA',
      cuisine: 'Sushi Restaurant',
      description: 'Locals line up at this simple sushi bar, known for traditional Japanese preparations & lunch deals.',
      imageUrl: "assets/images/restaurants/sushi_gen.jpg",
    },
    {
      id: 'kin_len',
      name: 'Kin Len Thai Night Bites',
      location: 'Seattle, WA',
      cuisine: 'Thai Restaurant',
      description: 'Vibrant space serving a broad menu of Thai classics plus vegan options alongside craft cocktails.',
      imageUrl: "assets/images/restaurants/kin_len.jpg",
    }
  ];
}
