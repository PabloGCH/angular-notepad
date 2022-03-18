import { Component, Input, OnInit } from '@angular/core';
import {Note} from '../../interfaces/note'

@Component({
  selector: 'app-text-renderer',
  templateUrl: './text-renderer.component.html',
  styleUrls: ['./text-renderer.component.css']
})
export class TextRendererComponent implements OnInit {
  @Input() noteToRender:Note = {title: "", date: "", content: ""};
  constructor() {}

  ngOnInit(): void {
  }

}
