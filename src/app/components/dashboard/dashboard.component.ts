import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Field} from "../../field";
import {FieldService} from "../../fieldService";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  fields: Field[] = [];
  btnRight: any;

  constructor(private fieldService: FieldService) {
  }

  ngOnInit() {
    this.getFields();
  }

  private getFields() {
    this.fieldService.getFields()
      .subscribe(fields => this.fields = fields);
  }

  buttonClicked(field) {

  }
}

