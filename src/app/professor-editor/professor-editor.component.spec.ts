import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEditorComponent } from './professor-editor.component';

describe('ProfessorEditorComponent', () => {
  let component: ProfessorEditorComponent;
  let fixture: ComponentFixture<ProfessorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
