import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductActionsService } from '../../../../services/product-actions.service';

@Component({
  selector: 'app-recent-item',
  templateUrl: './recent-item.component.html',
  styleUrls: ['./recent-item.component.css'],
})
export class RecentItemComponent implements OnInit {
  //
  math = Math;
  wishlisted: boolean = false;
  @Input() itemData: Product = {} as Product;

  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {
    this.wishlisted = this.productActionsService.wishlist.includes(
      this.itemData.id
    );
  }

  wishlistToggle() {
    this.wishlisted = !this.wishlisted;
    if (this.wishlisted)
      this.productActionsService.addToWishlist(this.itemData.id);
    else this.productActionsService.removeFromWishlist(this.itemData.id);
  }
}
