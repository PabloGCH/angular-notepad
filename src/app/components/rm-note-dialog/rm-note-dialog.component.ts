import { Component, OnInit , EventEmitter,  Output} from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-rm-note-dialog',
  templateUrl: './rm-note-dialog.component.html',
  styleUrls: ['./rm-note-dialog.component.css']
})
export class RmNoteDialogComponent implements OnInit {
  @Output() returnRm = new EventEmitter<boolean>();
  show = false;
  constructor() {}
  //PRE:
  //POS: Devuelve variable show
  returnShow() {
    return this.show;
  }
  //PRE:
  //POS: Asigna true a la variable show
  open(){
    this.show = true;
  }
  //PRE:
  //POS: Asigna false a show, emite true a padre
  closeRm(){
    this.show = false;
    this.returnRm.emit(true);
  }
  //PRE:
  //POS: Asigna false a show
  close(){
    this.show = false;
  }
  
  ngOnInit(): void {
    
  }

}

