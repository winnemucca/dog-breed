import { Component, OnInit } from '@angular/core';
import { BreedService } from '../breed-service.service';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.component.html',
  styleUrls: ['./breed-list.component.scss']
})
export class BreedListComponent implements OnInit {

  errorMessage: string;
  breedListDisplay$: Observable<any> = this.breedService.breedlist$
  .pipe(
    catchError( err => {
      this.errorMessage = err;
      return EMPTY;
      })
  );

  constructor(private breedService: BreedService) { }

  ngOnInit() {
  }

}
