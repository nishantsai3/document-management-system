import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ REQUIRED
  templateUrl: './documents.html'
})
export class Documents implements OnInit {

  documents: any[] = [];
  searchText: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadDocuments();
  }

  loadDocuments() {
    this.http.get<any[]>(
      `http://localhost:5000/api/documents/my?ts=${Date.now()}`
    ).subscribe({
      next: (res) => {
        console.log('API RESPONSE:', res);
        this.documents = Array.isArray(res) ? res : [];
      },
      error: (err) => {
        console.error('API ERROR:', err);
      }
    });
  }

  // 🔍 Search
  get filteredDocuments() {
    return this.documents.filter(doc =>
      doc.originalName?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // 🗑 Delete
  deleteDocument(id: string) {
    if (!confirm('Delete this document?')) return;

    this.http.delete(
      `http://localhost:5000/api/documents/${id}`
    ).subscribe({
      next: () => {
        this.documents = this.documents.filter(d => d._id !== id);
      },
      error: () => alert('Delete failed')
    });
  }
}
