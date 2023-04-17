import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiscoComponent } from './new-disco.component';

describe('NewDiscoComponent', () => {
  let component: NewDiscoComponent;
  let fixture: ComponentFixture<NewDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDiscoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
