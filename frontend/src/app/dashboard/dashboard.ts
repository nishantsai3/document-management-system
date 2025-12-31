import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Dashboard</h2>

    <button (click)="goUpload()">Upload Document</button>
    <br /><br />
    <button (click)="goDocuments()">My Documents</button>
    <br /><br />
    <button (click)="logout()">Logout</button>
  `
})
export class Dashboard {
  constructor(private router: Router) {}

  goUpload() {
    this.router.navigate(['/upload']);
  }

  goDocuments() {
    this.router.navigate(['/documents']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
