import { TestBed, inject } from '@angular/core/testing';

import { KanbanviewerService } from './kanbanviewer.service';

describe('KanbanviewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanviewerService]
    });
  });

  it('should be created', inject([KanbanviewerService], (service: KanbanviewerService) => {
    expect(service).toBeTruthy();
  }));
});
