import { TestBed } from '@angular/core/testing';

import { MiniCursoService } from './mini-curso.service';

describe('MiniCursoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MiniCursoService = TestBed.get(MiniCursoService);
    expect(service).toBeTruthy();
  });
});
