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
  day  :string = "...";
  month  :string = "...";
  year  :string = "...";
  notes: Note[] = [];
  searchBarValue :string = "";
  numberOfNotes :number = 0;
  selectedNote :number = -1;


  constructor() {
    for(let i = 1; i <= 31; i++){
      this.days.push(i)
    }
    for(let i = 1; i <= 12; i++){
      this.months.push(i)
    }
    for(let i = 2022; i <= 2023; i++){
      this.years.push(i)
    }

    //Datos para prueba
    this.notes.push({title: 'primera nota',date: '2022/2/13', content: 'esta es la primera nota', id: 0});
    this.numberOfNotes++;
    this.notes.push({title: 'segunda nota',date: '2023/4/14', content: 'esta es la segunda nota', id: 1});
    this.numberOfNotes++;
    this.notes.push({title: 'tercera nota',date: '2023/6/2018', content: 'esta es la tercera nota', id: 2});
    this.numberOfNotes++;

    
  }


  filteredNoteArray() {
    return this.filterByDate(this.filterBySearchTerm(this.notes));
  }


  filterBySearchTerm(array :Note[]) :Note[]{
    var parameter :string = this.searchBarValue;
    return array.slice().reverse().filter(function(item){
      return (item.content.search(parameter) != -1 || item.date.search(parameter) != -1);
    });
  }

  filterByDate(array :Note[]) :Note[]{
    var day = this.day;
    var month = this.month;
    var year = this.year;

    return array.slice().filter(function(item) {
      return ((day=="..." || item.date.search(`/${day}`) != -1) && (month=="..." || item.date.search(`/${month}/`) != -1) && (year=="..." || item.date.search(`${year}/`) != -1));
    })
  }

  setDayInput(dayInput :HTMLSelectElement){
    this.day = dayInput.value;
  }
  setMonthInput(monthInput :HTMLSelectElement){
    this.month = monthInput.value;
  }
  setYearInput(yearInput :HTMLSelectElement){
    this.year = yearInput.value;
  }


  setSearchBarValue(searchBarInput :HTMLInputElement){
    this.searchBarValue = searchBarInput.value;
  }

  rmNote() {
    if (this.selectedNote != -1){
      this.notes.splice(this.selectedNote, 1);
      this.numberOfNotes--;
      this.selectedNote = -1;
      this.reWriteNoteId();
    }
  }

  reWriteNoteId() {
    var i = 0;
    this.notes.forEach(element => {
      element.id = i;
      i++;
    });
  }

  //PRE: Recibe una nota
  //POS: Agrega la nota al array
  addNote(data :Note){
    var newNote = data;
    newNote.id = this.numberOfNotes
    this.notes.push(newNote);
    this.numberOfNotes++;
  }

  returnNote(note :Note) :void{
    console.log(note);
    this.selectedNote = note.id;
    this.currentNote.emit(note);
  }


  

  ngOnInit(): void {
      
  }
}
