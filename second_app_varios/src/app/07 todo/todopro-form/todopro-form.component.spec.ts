import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoproFormComponent } from './todopro-form.component';

describe('TodoproFormComponent', () => {
  let component: TodoproFormComponent;
  let fixture: ComponentFixture<TodoproFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoproFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoproFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
