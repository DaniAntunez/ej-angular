import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoproComponent } from './todopro.component';

describe('TodoproComponent', () => {
  let component: TodoproComponent;
  let fixture: ComponentFixture<TodoproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
