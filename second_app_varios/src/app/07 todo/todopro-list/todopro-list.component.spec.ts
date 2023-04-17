import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoproListComponent } from './todopro-list.component';

describe('TodoproListComponent', () => {
  let component: TodoproListComponent;
  let fixture: ComponentFixture<TodoproListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoproListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoproListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
