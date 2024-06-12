import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
  animations: [
    trigger('animationState', [
      state('success', style({})),
      state('error', style({
        // height: '60px',
        // opacity: 0.5,
        // backgroundColor: 'yellow'
      })),
      transition('success => error', [
        animate('900ms ease-in-out')
      ]),
      transition('error => success', [
        animate('900ms ease-in-out')
      ]),
    ])
  ]
})
export class NotificationComponent implements OnInit {
  public successStaatusAlert!:boolean
  public ngclassStatus!:boolean
  public message:string = ''

  successSubscription!: Subscription;
  errorSubscription!: Subscription;
  
  state = ''
  constructor(
    private notification:NotificationService
  ){}

  ngOnInit() {
    this.successSubscription = this.notification.successAnimation$.subscribe(
      state => { this.successStaatusAlert = state[0]
                  this.ngclassStatus = state[0]
                  this.message = state[1]
                  this.changeStatus()
                  console.log('successStaatusAlert',state)} 
    );

    this.errorSubscription = this.notification.errorAnimation$.subscribe(
      state => { this.successStaatusAlert = true,
                  this.ngclassStatus = state[0],
                  this.message = state[1]
                  this.changeStatus()
                  console.log('successStaatusAlert',state)} 
    );
  }

  changeStatus():void{
    setTimeout(() => (this.successStaatusAlert = false), 3000);
  }


  ngOnDestroy() {
    this.successSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

}
