import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display empty star rating when ', () => {
    fixture.componentInstance.rating = 'empty';
    component.selectStar();
    fixture.detectChanges();


  });

  it('should display half filled star rating when ', () => {

  });

  it('should display filled star rating when ', () => {

  });
});
