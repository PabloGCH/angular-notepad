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
    for(let i = 2021; i <= 2023; i++){
      this.years.push(i)
    }

    for(var i=0; i <= 10; i++) {
      this.notes.push({title: `Nota N°${i}`,date: `2021/${i + 1}/${i * 2 + 3}-time`, content: `Esta es una nota`, id: i});
      this.numberOfNotes++;
    }
    for(var i=0; i <= 10; i++) {
      this.notes.push({title: `Nota N°${i + 11}`,date: `2022/${i + 1}/${i * 2 + 3}-time`, content: `Esta es una nota`, id: i + 11});
      this.numberOfNotes++;
    }
  }

  //PRE:
  //POS: Filtra el array de notas de acuerdo a searchBarValue y por las fecha.
  filteredNoteArray() {
    return this.filterByDate(this.filterBySearchTerm(this.notes));
  }


  //PRE: Recibe un array de notas
  //POS: Filtra segun el contenido de searchBarValue
  filterBySearchTerm(array :Note[]) :Note[]{
    var parameter :string = this.searchBarValue;
    return array.slice().reverse().filter(function(item){
      return (item.title.search(parameter) != -1 || item.date.search(parameter) != -1);
    });
  }

  //PRE: Recibe un array de notas
  //POS: Filtra segun el valor de las variables day, month y year
  filterByDate(array :Note[]) :Note[]{
    var day = this.day;
    var month = this.month;
    var year = this.year;

    return array.slice().filter(function(item) {
      return ((day=="..." || item.date.search(`/${day}-`) != -1) && (month=="..." || item.date.search(`/${month}/`) != -1) && (year=="..." || item.date.search(`${year}/`) != -1));
    })
  }

  //PRE: Recibe un HTMLSelectElement que tiene como valor el dia
  //POS: Asigna el valor a day
  setDayInput(dayInput :HTMLSelectElement){
    this.day = dayInput.value;
  }
  //PRE: Recibe un HTMLSelectElement que tiene como valor el mes
  //POS: Asigna el valor a month
  setMonthInput(monthInput :HTMLSelectElement){
    this.month = monthInput.value;
  }
  //PRE: Recibe un HTMLSelectElement que tiene como valor el año
  //POS: Asigna el valor a year
  setYearInput(yearInput :HTMLSelectElement){
    this.year = yearInput.value;
  }
  //PRE: Recibe un HTMLInputElement
  //POS: Asigna el valor del parametro a searchBarValue
  setSearchBarValue(searchBarInput :HTMLInputElement){
    this.searchBarValue = searchBarInput.value;
  }

  //PRE;
  //POS: Remueve la nota seleccionada (la que esta en el index determinado por selectedNote)
  rmNote() {
    if (this.selectedNote != -1){
      this.notes.splice(this.selectedNote, 1);
      this.numberOfNotes--;
      this.selectedNote = -1;
      this.reWriteNoteId();
    }
  }

  //PRE: Se debe llamar cuando haya cambios en notes
  //POS: Cambia el id de las notas para que sigan la logica del array modificado
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

  //PRE: Recibe una nota
  //POS: Emite la nota al padre, Asigna el id de la nota a selectedNote
  returnNote(note :Note) :void{
    this.selectedNote = note.id;
    this.currentNote.emit(note);
  }

  //PRE: Recibe un HTMLSelectElement
  //POS: Expande el menu del select
  selectExpand(element :HTMLSelectElement){
    element.removeAttribute("disabled")
    element.size = 5;
    element.classList.add("select-dropdown");
  }
  //PRE: Recibe un HTMLSelectElement
  //POS: Colapsa el menu del select
  selectCollapsed(element :HTMLSelectElement){
    element.removeAttribute("size");
    element.blur();
    element.classList.remove("select-dropdown");
  }

  ngOnInit(): void {
      
  }
}
