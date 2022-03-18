import { Component, OnInit , EventEmitter,  Output} from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-rm-note-dialog',
  templateUrl: './rm-note-dialog.component.html',
  styleUrls: ['./rm-note-dialog.component.css']
})
export class RmNoteDialogComponent implements OnInit {
  @Output() returnRm = new EventEmitter<boolean>();
  show = true;
  constructor() {}

  returnShow() {
    return this.show;
  }
  open(){
    this.show = true;
  }
  closeRm(){
    this.show = false;
    this.returnRm.emit(true);
  }
  close(){
    this.show = false;
  }
  
  ngOnInit(): void {
    
  }

}

