import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Field} from "../../field";
import {FieldService} from "../../fieldService";
import {NgForOf, NgIf} from "@angular/common";
import {ButtonComponent} from "../button/button.component";
import {SubjectAreaComponent} from "../subject-area/subject-area.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf,
    ButtonComponent,
    SubjectAreaComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  fields: Field[] = [];

  constructor(private fieldService: FieldService) {
  }

  ngOnInit() {
    this.getFields();
  }

  private getFields() {
    this.fieldService.getFields()
      .subscribe(fields => {
        this.fields = fields;
        console.log(this.fields);
      });
  }

  createNewField() {
    let fieldAmount: number = this.fields.length;
    const newField: Field = {
      id: fieldAmount++,
      name: "Neues Lerngebiet"
    };

    this.fieldService.createField(newField);
  }
}

