import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectNameComponent } from './subject-name.component';

describe('SubjectNameComponent', () => {
  let component: SubjectNameComponent;
  let fixture: ComponentFixture<SubjectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct subject name',() => {
    //1. provide name to component
    //2. search for text / look for name in template / search for p
    //3. assert that element with text exists / assert that p.innerText equals name
    fixture.componentInstance.name = 'Angular';
    fixture.detectChanges();

    const paragraph = fixture.nativeElement.querySelector('p');

    expect(paragraph.innerText).toEqual('Angular');
  });
});
