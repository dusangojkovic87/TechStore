import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Models/Review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}
  getReviews(): Observable<Review> {
    return this.http.get<Review>('assets/fakeBackendApi/client-reviews.json');
  }
}
