import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import { DogBreed } from './breed.model';

@Injectable({
  providedIn: 'root'
})
export class BreedService {
  constructor(private http: HttpClient) {}

  apiURL = 'https://dog.ceo/api/breeds/list/all';

  breedlist$: Observable<string[]> = this.http.get<DogBreed>(`${this.apiURL}`)
        .pipe(
          map(res => Object.keys(res.message)),
          tap(data => console.log(data)),
          catchError(this.handleError)
        );

  private handleError() {
    return throwError('errorMessage');
  }

}
