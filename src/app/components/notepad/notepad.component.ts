import { Component, OnInit, ViewChild} from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
  currentNote :Note;
  constructor() {
    this.currentNote = {title: "", date: "", content: "", id: 0};
  }

  //PRE: Recibe una nota de elemento hijo
  //POS: Guarda la nota recibida en currentNote
  saveCurrentNote($event:Note){
    this.currentNote = $event;
  }


  ngOnInit(): void {
      
  }
}
