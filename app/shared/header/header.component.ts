import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import { Subscription } from 'rxjs';
import { NotificationService } from '../../service/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public signupForm!:FormGroup

  public email:string = ''
  public password:string = ''

  private registration$!:Subscription
  private signIn$!:Subscription


  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private notification:NotificationService
  ){}

  ngOnInit(): void {
    this.getForm()
  }

  //აკეთებს ნავიგაციას აპლიკაციაში
  public navigation(navigatioName:string):void{

    if(navigatioName == 'HOME'){
      this.router.navigate(['home']);
    }else if(navigatioName == 'ABOUT'){
      this.router.navigate(['about']);
    }else if(navigatioName == 'OUR-PRODUCTS'){
      this.router.navigate(['our-product']);
    }else{
      this.router.navigate(['cont-us']);
    }

  }


  public signIn():void{

    let sendObj = {
      email: this.email,
      password: this.password
    }

    this.signIn$ = this.registrationService.signIn(sendObj).subscribe({
      next : (res) => {
        
        let message = 'თქვენ წარმატებით დალოგინდით!!'
        this.notification.showSuccessAnimation(message)
        console.log('success', res)
      },
      error: (e) => {
        console.log('error', e.error.errorKeys)
      },
      complete: () => {}
    })

  }

  public onSubmit(){
    // console.log(this.signupForm.value)

    this.registration$ = this.registrationService.registration(this.signupForm.value).subscribe({
      next : (res) => {
        console.log('success')
      },
      error: (e) => {
        console.log('error', e.error.errorKeys)
      },
      complete: () => {}
    })

  }

  private getForm():void{
    this.signupForm = new FormGroup({
      'firstName': new FormControl(null),
      'lastName': new FormControl(null),
      'age': new FormControl(null),
      'address': new FormControl(null),
      'phone': new FormControl(null),
      'zipcode': new FormControl(null),
      'avatar': new FormControl("https://avatar.iran.liara.run/public/7"),
      'email': new FormControl(null),
      'password': new FormControl(null),
      'gender': new FormControl('')
    })
  }

  ngOnDestroy() {
    this.registration$ ? this.registration$.unsubscribe() : '';
    this.signIn$ ? this.signIn$.unsubscribe() : ''
   }

}

// {
//   "_id": "66658baf62c3da04eb20ed38",
//   "firstName": "kristina",
//   "lastName": "jashi",
//   "age": 26,
//   "email": "k.jashi@gmail.com",
//    password:12345678
//   "address": "kutaisi",
//   "role": "default",
//   "zipcode": "0182",
//   "avatar": "https://avatar.iran.liara.run/public/7",
//   "gender": "FEMALE",
//   "phone": "+995598100240",
//   "verified": false
// }