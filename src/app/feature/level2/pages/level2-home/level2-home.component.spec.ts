import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2HomeComponent } from './level2-home.component';

describe('Level2HomeComponent', () => {
  let component: Level2HomeComponent;
  let fixture: ComponentFixture<Level2HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level2HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level2HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
