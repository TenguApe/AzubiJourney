import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SubjectAreaComponent} from './subject-area.component';
import {Component} from "@angular/core";

@Component({
  selector: 'host-component',
  template: '<app-subject-area [name]="testName" [rating]="testRating" ></app-subject-area>',

})
class TestHostComponent {

  testName: string;
  testRating: number = null;
}

@Component({
  selector: 'host-component2',
  template: '<app-subject-area [name]="testName"></app-subject-area>',

})
class TestHostComponent2 {

  testName: string;
}


describe('SubjectAreaComponent', () => {
  //stores an instance of SubjectAreaComponent
  let component: SubjectAreaComponent;
  //stores an instace of ComponentFixture,
  //which contains methods for debugging and testing a component
  let fixture: ComponentFixture<SubjectAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestHostComponent,
        TestHostComponent2
      ],
      imports: [
        SubjectAreaComponent
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SubjectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    //[assertion check].[matcher]
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

      const ratingFixture = TestBed.createComponent(TestHostComponent);
      ratingFixture.componentInstance.testRating = 3;
      ratingFixture.detectChanges();

      const rating = ratingFixture.nativeElement.querySelector('.rating');

      expect(rating.innerText).toEqual('Aktuelles Rating: 3/5');
    });

    it('should show 0 of 5 if no rating is provided', async () => {

      const ratingFixture = TestBed.createComponent(TestHostComponent2);

      ratingFixture.detectChanges();
      const rating = ratingFixture.nativeElement.querySelector('.rating');

      expect(rating.innerText).toEqual('Aktuelles Rating: 0/5');
    });

    it('should show correct error message when input greater than 5', () => {
      fixture.componentInstance.rating = 6;
      component.checkRating();
      fixture.detectChanges();

      const errorMsg = fixture.nativeElement.querySelector('.errorMessage');
      expect(errorMsg.innerText).toEqual('Fehler! Rating darf nicht größer als 5 sein.');
    });

    it('should show correct error message when input smaller than 0', () => {
      fixture.componentInstance.rating = -1;
      component.checkRating();
      fixture.detectChanges();

      const errorMsg = fixture.nativeElement.querySelector('.errorMessage');

      expect(errorMsg.innerText).toEqual('Fehler! Rating darf nicht kleiner als 0 sein.');
    });

    /*it('should check simulated setting of input property', () => {

      let fieldNatElement = fixture.nativeElement.querySelector('.list');

      let expectedField = {id: 1, name: 'Angular', rating: 3};

      component.name = expectedField.name;
      component.rating = expectedField.rating;

      fixture.detectChanges();

      expect(fieldNatElement.innerText).toContain(expectedField.rating.toString());

    });*/
  });
});
