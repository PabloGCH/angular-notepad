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
    this.currentNote = {title: "", date: "", content: ""};
  }


  saveCurrentNote($event:Note){
    this.currentNote = $event;
  }


  ngOnInit(): void {
      
  }
}
