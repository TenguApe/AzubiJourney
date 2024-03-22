import {Component, Input} from '@angular/core';
import {StarComponent} from "./star/star.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [
    StarComponent,
    NgForOf
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number;

  stars = [
    {star: 'empty'},
    {star: 'empty'},
    {star: 'empty'},
    {star: 'empty'},
    {star: 'empty'},
  ]

  ngOnInit() {
    this.loopThrough();
  }


  loopThrough() {
    //let loopRating: number = this.rating++;
    let loopRating = 3.5; //Fester Rating Wert nur für Testzwecke, eigentlich wärs Zeile 32
    for (let i = 0; i < 5; i++) {
      if (loopRating >= 1) {
        this.stars[i].star = 'full';
      } else if (loopRating === 0.5) {
        this.stars[i].star = 'half';
      } else {
        this.stars[i].star = 'empty';
      }
      loopRating--;
    }
  }
}
