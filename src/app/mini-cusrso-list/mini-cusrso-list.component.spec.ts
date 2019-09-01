import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCusrsoListComponent } from './mini-cusrso-list.component';

describe('MiniCusrsoListComponent', () => {
  let component: MiniCusrsoListComponent;
  let fixture: ComponentFixture<MiniCusrsoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCusrsoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCusrsoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
