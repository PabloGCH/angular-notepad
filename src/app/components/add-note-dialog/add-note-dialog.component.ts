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

  returnShow() {
    return this.show;
  }
  open(){
    this.show = true;
  }
  
  closeAdd(title :HTMLInputElement, content :HTMLTextAreaElement){
    var noteDate = new Date;
    var data :Note = {title: title.value, content: content.value, date: `${noteDate.getFullYear()}/${noteDate.getMonth()}/${noteDate.getDate()}-${noteDate.getHours()}:${noteDate.getMinutes()}:${noteDate.getSeconds()}`, id: 0}
    title.value = "";
    content.value = "";
    this.show = false;
    this.newNoteData.emit(data);
  }
  close(title :HTMLInputElement, content :HTMLTextAreaElement) {
    title.value = "";
    content.value = "";
    this.show = false;
  }
  
  ngOnInit(): void {
    
  }

}

