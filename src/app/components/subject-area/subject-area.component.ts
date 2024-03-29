import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {NgIf} from "@angular/common";
import {SubjectNameComponent} from "./subject-name/subject-name.component";
import {StarComponent} from "./rating/star/star.component";
import {RatingComponent} from "./rating/rating.component";

@Component({
  selector: 'app-subject-area',
  standalone: true,
  imports: [
    ButtonComponent,
    NgIf,
    SubjectNameComponent,
    StarComponent,
    RatingComponent
  ],
  templateUrl: './subject-area.component.html',
  styleUrl: './subject-area.component.css'
})
export class SubjectAreaComponent {

  @Input() name: string;
  @Input() rating: number = 0;
  errorMsg: string;
  constructor() {
  }
   checkRating() {
    if (this.rating > 5) {
      this.errorMsg = 'Fehler! Rating darf nicht größer als 5 sein.';
    }
    else if(this.rating < 0){
      this.errorMsg = 'Fehler! Rating darf nicht kleiner als 0 sein.';
    }
    else{
      this.errorMsg = '';
    }
  }
}


