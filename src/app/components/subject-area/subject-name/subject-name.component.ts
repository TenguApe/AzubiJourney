import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-subject-name',
  standalone: true,
  imports: [],
  templateUrl: './subject-name.component.html',
  styleUrl: './subject-name.component.css'
})
export class SubjectNameComponent {
  @Input() name: string;

  onClick() {
    //navigates deeper into the chosen subject details
  }
}
