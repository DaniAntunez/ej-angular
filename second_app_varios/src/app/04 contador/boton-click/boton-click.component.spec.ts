import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonClickComponent } from './boton-click.component';

describe('BotonClickComponent', () => {
  let component: BotonClickComponent;
  let fixture: ComponentFixture<BotonClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
