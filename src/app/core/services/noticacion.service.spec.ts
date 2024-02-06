import { TestBed } from '@angular/core/testing';

import { NoticacionService } from './noticacion.service';

describe('NoticacionService', () => {
  let service: NoticacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoticacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
