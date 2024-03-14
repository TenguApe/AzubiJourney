import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Field } from './field';
import { INITFIELDS } from './initFields';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  getFields(): Observable<Field[]> {
    return of(INITFIELDS);
  }
}
