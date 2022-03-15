import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <mat-sidenav-container>
        <mat-sidenav #sidenav role="navigation">
          <app-sidenav-list (sidenavClose)="sidenav.close()"></app-sidenav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <app-header (sidenavToggle)="sidenav.toggle()"></app-header>
          <main>
            <router-outlet></router-outlet>
          </main>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </app-layout>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CloudFirestore';
}
