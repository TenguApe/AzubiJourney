import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Field } from './field';
import { INITFIELDS } from './initFields';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private nextId: number = INITFIELDS.length;
  private fieldsSubject: BehaviorSubject<Field[]> = new BehaviorSubject<Field[]>(INITFIELDS);

  constructor() { }

  getFields(): Observable<Field[]> {
    return of(INITFIELDS);
  }

  createField(newField: Field) {
    newField.id = INITFIELDS.length + 1;
    const currentFields = this.getFields();
    this.getFields().subscribe(currentFields => {
      const updatedFields = [...currentFields, newField];
      this.fieldsSubject.next(updatedFields);
    });

  }
}
