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

  describe('rating', () => {

    it('should contain a rating of 3 of 5', () => {
      fixture.componentInstance.rating = 3;
      fixture.detectChanges();

      const rating = fixture.nativeElement.querySelector('.rating');

      expect(rating.innerText).toEqual('3/5');
    });

    it('should show 0 of 5 if no rating is provided', () => {

      const rating = fixture.nativeElement.querySelector('.rating');

      expect(rating.innerText).toEqual('0/5');
    });

    it('should show error message when input greater than 5', () => {
      fixture.componentInstance.rating = 6;
      fixture.detectChanges();

      const errorMsg = fixture.nativeElement.querySelector('.errorMessage');
      expect(errorMsg.innerText).toEqual('Fehler! Rating darf nicht größer als 5 sein.');
    });

    it('should show error message when input smaller than 0', () => {
      fixture.componentInstance.rating = -1;
      fixture.detectChanges();

      const errorMsg = fixture.nativeElement.querySelector('.errorMessage');

      expect(errorMsg.innerText).toEqual('Fehler! Rating darf nicht kleiner als 0 sein.');
    });

    it('should test simulated setting input property', () => {

      let expectedRating = 2;
      let ratingElement = fixture.nativeElement.querySelector('.rating');

      fixture.componentInstance.rating = expectedRating;
      fixture.detectChanges();

      expect(ratingElement.innerText).toEqual(expectedRating);

    });
    it('should test simulated setting input property 2', () => {

      let expectedField = {id: 1, name: 'Angular', rating: 3};

      component.field = expectedField;
      fixture.detectChanges();

    });
  });
});
