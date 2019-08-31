import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteEditorComponent } from './participante-editor.component';

describe('ParticipanteEditorComponent', () => {
  let component: ParticipanteEditorComponent;
  let fixture: ComponentFixture<ParticipanteEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipanteEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipanteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
