import { Component } from '@angular/core';
import {Food} from "../../models/Food";
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food !: Food;

  constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
              private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      // @ts-ignore
      if(params.id) {
        // @ts-ignore
        this.food = foodService.getFoodById(params.id);
      }
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
