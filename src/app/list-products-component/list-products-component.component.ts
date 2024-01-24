import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../iproduct';
import { Observable, Subscription } from 'rxjs';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./list-products-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListProductsComponentComponent implements OnInit {
/*  products: IProduct[] = []
  productSubscription?: Subscription
  constructor(private appService: AppServiceService,private cd: ChangeDetectorRef) { }

  productObserver = {
    next: (data: IProduct[]) => { this.products = data; this.cd.markForCheck(); },
    error: (error: any) => { console.log(error) },
    complete: () => { console.log('product stream completed ') }
  }
  ngOnInit(): void {
    this.productSubscription = this.appService.Products$.subscribe(this.productObserver)
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }*/
  products?: Observable<IProduct[]>;
  constructor(private appService: AppServiceService) {}
  ngOnInit(): void {
    this.products = this.appService.Products$;
  }
}
