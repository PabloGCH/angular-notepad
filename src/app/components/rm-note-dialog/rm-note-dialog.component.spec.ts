import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmNoteDialogComponent } from './rm-note-dialog.component';

describe('RmNoteDialogComponent', () => {
  let component: RmNoteDialogComponent;
  let fixture: ComponentFixture<RmNoteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmNoteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmNoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
