import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  isLoading$ = this.loadingSubject.asObservable();

  setLoadingState() {
    this.loadingSubject.next(true);
  }
  hideLoader(){
    this.loadingSubject.next(false);
  }
}
