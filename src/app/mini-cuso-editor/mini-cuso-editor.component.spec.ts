import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCusoEditorComponent } from './mini-cuso-editor.component';

describe('MiniCusoEditorComponent', () => {
  let component: MiniCusoEditorComponent;
  let fixture: ComponentFixture<MiniCusoEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCusoEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCusoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
