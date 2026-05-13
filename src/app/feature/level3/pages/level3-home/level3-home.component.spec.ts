import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Level3HomeComponent } from './level3-home.component';

describe('Level3HomeComponent', () => {
  let component: Level3HomeComponent;
  let fixture: ComponentFixture<Level3HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Level3HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Level3HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
