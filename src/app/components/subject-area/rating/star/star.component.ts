import {Component, Input} from '@angular/core';
import {faStar, faStarHalf} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [
    FaIconComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent{

  iconHalf = faStarHalf;
  icon = faStar;
  @Input() rating!: string;

  displayFull: boolean;
  displayHalf: boolean;
  displayEmpty: boolean;

  ngOnInit(){
    this.selectStar();
  }
  selectStar(){
    if(this.rating === 'full'){
      this.displayFull = true;
    }
    else if(this.rating === 'half'){
      this.displayHalf = true;
    }
    else if(this.rating === 'empty'){
      this.displayEmpty = true;
    }

  }

}
