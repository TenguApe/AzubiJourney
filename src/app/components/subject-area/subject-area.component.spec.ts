import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SubjectAreaComponent} from './subject-area.component';

describe('SubjectAreaComponent', () => {
  let component: SubjectAreaComponent;
  let fixture: ComponentFixture<SubjectAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectAreaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SubjectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display provided name', () => {
    fixture.componentInstance.name = 'Angular';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');

    expect(button.innerText).toEqual('Angular');
  });
});
