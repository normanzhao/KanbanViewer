import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanviewerComponent } from './kanbanviewer.component';

describe('KanbanviewerComponent', () => {
  let component: KanbanviewerComponent;
  let fixture: ComponentFixture<KanbanviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
