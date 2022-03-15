import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <div fxHide.gt-xs>
        <button mat-icon-button (click)="onToggleSidenav()">
          <mat-icon>menu</mat-icon>
        </button>
      </div>
      <div>
        <a routerLink="/home">CloudStorage - Firestore</a>
      </div>
      <div fxFlex fxLayout fxLayoutAlign="end" fxHide.xs>
        <ul fxLayout fxLayoutGap="15px" class="navigation-items">
          <li>
            <a routerLink="/logout">Logout</a>
          </li>
        </ul>
      </div>
    </mat-toolbar>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
