import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.html'
})
export class Upload {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      alert('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('tags', 'important,project');

    this.http.post(
      'http://localhost:5000/api/documents/upload',
      formData
    ).subscribe({
      next: () => alert('File uploaded successfully'),
      error: (err) => {
        console.error(err);
        alert('Upload failed');
      }
    });
  }
}
