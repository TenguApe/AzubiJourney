import {Component, Input} from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-subject-area',
  standalone: true,
    imports: [
        ButtonComponent
    ],
  templateUrl: './subject-area.component.html',
  styleUrl: './subject-area.component.css'
})
export class SubjectAreaComponent {

   @Input() name: string;

}
