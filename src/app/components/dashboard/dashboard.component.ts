import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Field} from "../../field";
import {FieldService} from "../../fieldService";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  fields: Field[] = [];

  constructor(private fieldService: FieldService) {
  }

  ngOnInit() {
    this.getFields();
    console.log(this.fields)
  }

  private getFields() {
    this.fieldService.getFields()
      .subscribe(fields => this.fields = fields);
  }

  buttonClicked(field) {

  }
}

