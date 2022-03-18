import { Component,Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //Constants
  days :number[] = [];
  months :number[] = [];
  years :number[] = [];
  //Output
  @Output() currentNote = new EventEmitter<Note>();
  @Output() addButtonClicked = new EventEmitter<boolean>();
  //Attributes
  notes: Note[] = [];
  searchBarValue :string = "";
  numberOfNotes :number= 5;
  selectedNote !:number;


  constructor() {
    this.notes.push({title: 'primera nota',date: '13/4', content: 'esta es la primera nota'});
    this.notes.push({title: 'segunda nota',date: '20/5', content: 'esta es la segunda nota'});
    this.notes.push({title: 'tercera nota',date: '15/6', content: 'esta es la tercera nota'});
    this.notes.push({title: 'cuarta nota',date: '15/7', content: 'esta es la cuarta nota'})
    this.notes.push({title: 'quinta nota',date: '17/8', content: 'esta es la quinta nota'})
    console.log(this.notes);
  }



  filteredNoteArray() :Note[]{
    var parameter :string = this.searchBarValue;
    return this.notes.slice().reverse().filter(function(item){
      return (item.content.search(parameter) != -1 || item.date.search(parameter) != -1);
    });
  }

  setSearchBarValue(searchBarInput :HTMLInputElement){
    this.searchBarValue = searchBarInput.value;
  }

  rmNote() {
    this.notes.splice(this.selectedNote, 1);
    this.numberOfNotes--;
  }

  //PRE: Recibe una nota
  //POS: Agrega la nota al array
  addNote(data :Note){
    var newNote = data;
    this.notes.push(newNote);
    this.numberOfNotes++;
  }

  returnNote(num : number) :void{
    this.selectedNote = num;
    this.currentNote.emit(this.notes[num]);
  }


  

  ngOnInit(): void {
      
  }

}
