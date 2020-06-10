import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThelistComponent } from './thelist.component';

describe('ThelistComponent', () => {
  let component: ThelistComponent;
  let fixture: ComponentFixture<ThelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
