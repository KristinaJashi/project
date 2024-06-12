import { Component, OnDestroy } from '@angular/core';
import { GetprodactsService } from '../service/getprodacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrl: './our-products.component.scss',
})
export class OurProductsComponent implements OnDestroy {
  allProducts$!: Subscription;
  allProdatacsArr: any[] = [];

  constructor(private getprodactsService: GetprodactsService) {}

  public getMoreProdutcs(): void {
    this.allProducts$ = this.getprodactsService
      .getAllProducts()
      .subscribe((response) => {
        console.log('allProducts', response);
        this.allProdatacsArr = response;
        // response.products.forEach((element:any) => {
        //   this.allProdatacsArr.push(element)
        // });

        console.log('allProducts', this.allProdatacsArr);
      });
  }

  ngOnDestroy() {
    this.allProducts$ ? this.allProducts$.unsubscribe() : '';
    // this.computerRoomsDeleteSubscription ? this.computerRoomsDeleteSubscription.unsubscribe() : ''
  }
}

// {
//   "_id": "6664a2920b116cc86723f254",
//   "firstName": "Kristina",
//   "lastName": "Jashi",
//   "age": 26,
//   "email": "test@test.com",
//    "password": "1111111111",
//   "address": "string",
//   "role": "default",
//   "zipcode": "1111",
//   "avatar": "https://avatar.iran.liara.run/public/6",
//   "gender": "FEMALE",
//   "phone": "+995111111",
//   "verified": false
// }
