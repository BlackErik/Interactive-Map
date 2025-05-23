import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfoComponent } from './country-info.component';

describe('CountryInfoComponent', () => {
  let component: CountryInfoComponent;
  let fixture: ComponentFixture<CountryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
