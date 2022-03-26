import { Component, OnInit , EventEmitter,  Output} from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent implements OnInit {
  @Output() newNoteData = new EventEmitter<Note>();
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
  
  //PRE: Recibe un HTMLInputElement con el titulo de la nota y
  // un HTMLTextAreaElement con el contenido de la nota
  //POS: Crea un objeto nota y lo emite, asigna false a show
  closeAdd(title :HTMLInputElement, content :HTMLTextAreaElement){
    var noteDate = new Date;
    var data :Note = {title: title.value, content: content.value, date: `${noteDate.getFullYear()}/${noteDate.getMonth()}/${noteDate.getDate()}-${noteDate.getHours()}:${noteDate.getMinutes()}:${noteDate.getSeconds()}`, id: 0}
    title.value = "";
    content.value = "";
    this.show = false;
    this.newNoteData.emit(data);
  }
  //PRE: Recibe un HTMLInputElement con el titulo de la nota y
  // un HTMLTextAreaElement con el contenido de la nota.
  //POS: Asigna false a show, vacia el input y el textarea
  close(title :HTMLInputElement, content :HTMLTextAreaElement) {
    title.value = "";
    content.value = "";
    this.show = false;
  }
  
  ngOnInit(): void {
    
  }

}

