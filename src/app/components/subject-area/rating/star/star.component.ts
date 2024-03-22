import {Component, Input} from '@angular/core';
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent{

  iconHalf = faStarHalf;
  icon = faStar;

  @Input() rating!: any;


  displayFull: boolean;
  displayHalf: boolean;
  displayEmpty: boolean;

  constructor() {
  }

  ngOnInit(){
    this.selectStar();
  }
  selectStar(){
    if(this.rating === 1){
      this.displayFull = true;
    }
    else if(this.rating === 0.5){
      this.displayHalf = true;
    }
    else if(this.rating === 0){
      this.displayEmpty = true;
    }

  }

}
