import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level1HomeComponent } from './level1-home.component';

describe('Level1HomeComponent', () => {
  let component: Level1HomeComponent;
  let fixture: ComponentFixture<Level1HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level1HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level1HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
