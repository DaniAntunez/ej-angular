import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasurePageComponent } from './treasure-page.component';

describe('TreasurePageComponent', () => {
  let component: TreasurePageComponent;
  let fixture: ComponentFixture<TreasurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreasurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
