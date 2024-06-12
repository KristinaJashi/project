import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private successSource = new Subject<[boolean, string]>();
  private errorSource = new Subject<[boolean, string]>();

  successAnimation$ = this.successSource.asObservable();
  errorAnimation$ = this.errorSource.asObservable();

  showSuccessAnimation(item:any) {
    console.log('showSuccessAnimation', item)
    this.successSource.next([true, item]);
  }

  showErrorAnimation(item:string) {
    this.errorSource.next([false, item]);
    console.log('showErrorAnimation', item)
    
  }
}
