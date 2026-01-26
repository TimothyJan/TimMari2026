import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomGenerator } from "../../components/random-generator/random-generator";
import data from '../../../assets/data.json';

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
export class Hikes implements OnInit {

  countriesTraveledString: string = "";
  totalDistance: number = data.hikeTotalDistance; // miles
  totalElevation: number = data.hikeTotalElevation; // ft
  totalHikes: number = data.hikes.length;

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

  ngOnInit(): void {
    this.countriesTraveled();
  }

  countriesTraveled(): void {
    const countries = data.countries;
    for (let i=0; i<countries.length; i++) {
      if(i === countries.length-1) {
        this.countriesTraveledString += "and " + countries[i]
      } else {
        this.countriesTraveledString += countries[i] + ", "
      }

    }
  }

  formatNumber(value: number): string {
    return value.toLocaleString('en-US', {
      minimumFractionDigits: value % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: value % 1 !== 0 ? 2 : 0
    });
  }

  getEverestCount(): string {
    const everestHeight = 29032; // feet
    const count = this.totalElevation / everestHeight;
    return count.toFixed(1);
  }

  getMarathonCount(): string {
    const marathonMiles = 26.2;
    const count = this.totalDistance / marathonMiles;
    return Math.round(count).toString();
  }
}
