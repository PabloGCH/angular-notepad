//Modules
//Angular core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//Angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TextRendererComponent } from './components/text-renderer/text-renderer.component';
import { NotepadComponent } from './components/notepad/notepad.component';
import { AddNoteDialogComponent } from './components/add-note-dialog/add-note-dialog.component';
import { RmNoteDialogComponent } from './components/rm-note-dialog/rm-note-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TextRendererComponent,
    NotepadComponent,
    AddNoteDialogComponent,
    RmNoteDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
