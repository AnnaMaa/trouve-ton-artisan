import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanCardComponent } from './artisan-card.component';

describe('ArtisanCardComponent', () => {
  let component: ArtisanCardComponent;
  let fixture: ComponentFixture<ArtisanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
