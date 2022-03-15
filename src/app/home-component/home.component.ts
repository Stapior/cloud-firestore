import {Component} from '@angular/core';
import {Observable} from "rxjs";

interface Note {
  text: string;
  id?: string;
}

@Component({
  selector: 'app-home',
  template: `
    <section fxLayout="column">
      <div fxLayout="row wrap" fxLayoutGap="20px">
        <ng-container *ngFor="let note of notes;let  i = index; trackBy: trackByFn">
          <div class="note" fxLayout="column" fxGap="10">
            <div class="note_toolbar">
              <span class="close material-icons" (click)="deleteNote(note,i)">close</span>
            </div>
            <textarea class="content" contenteditable="true" [(ngModel)]="note.text"
                      (blur)="saveNote(note)" #content>
          </textarea>
            <div class="footer">
              <button class="material-icons" (click)="saveNote(note)">save</button>
            </div>
          </div>
        </ng-container>
      </div>
      <div>
        <button mat-raised-button color="primary" (click)="addNote()">
          Add note
        </button>
      </div>
      <!--      {{filteredNotes$ | async | json}}-->
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes$: Observable<Note[]>;
  filteredNotes$: Observable<Note[]>;
  notes: Note[];

  constructor() {
    this.notes = [{text: 'Start note'}];
  }

  addNote() {
    this.notes.push({text: "Empty note"});
  }

  deleteNote(note: Note, index: number) {
    this.notes.splice(index, 1);
  }

  saveNote(note: Note) {
    // unused
  }

  // private db: AngularFirestore

  // this.notes$ = db.collection<Note>('notes').valueChanges({idField: 'id'})

  // this.filteredNotes$ = db.collection<Note>('notes', ref => ref
  //   // .where('text', '==', 'note A')
  //   .orderBy('text')
  //   .limit(2)
  // ).valueChanges({idField: 'id'})

  // this.db.collection<Note>('notes').add({text: "Empty note"}).then()

  // this.db.collection<Note>('notes').doc(note.id).delete().then()

  // this.db.collection<Note>('notes').doc(note.id).set(note).then()

  // // batch
  // const batch = this.db.firestore.batch()
  // batch.set(this.db.collection('notes').doc('newNote').ref, {text: 'batch note'})
  // batch.set(this.db.collection('notes').doc('newNote2').ref, {text: 'batch note 2'})
  // batch.commit().then(r => console.log(r))


  // //Transakcje
  // const ref = this.db.firestore.collection("notes").doc("newNote");
  // this.db.firestore.runTransaction(transaction =>
  //   transaction.get(ref)
  //     .then(sfDoc => {
  //       const newText = sfDoc.data()['text'] + "updated";
  //       transaction.update(ref, { text: newText});
  //     })).then(() => console.log("Transaction successfully committed!"))
  //   .catch(error => console.log("Transaction failed: ", error));


  trackByFn(index: number, note: Note): string {
    return note?.id;
  }

}
