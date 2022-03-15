import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  template: `
    <mat-nav-list>
      <a mat-list-item routerLink="/home" (click)="onSidenavClose()">
        <mat-icon>home</mat-icon>
        <span class="nav-caption">Home</span>
      </a>
      <a mat-list-item routerLink="/logout" (click)="onSidenavClose()">
        <mat-icon>logout</mat-icon>
        <span class="nav-caption">Logout</span>
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
