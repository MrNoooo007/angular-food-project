import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/Food';
import { FoodService } from 'src/app/services/food.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods : Food[] | null = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      // @ts-ignore
      if(params.searchTerm) {
        console.log(params['searchTerm'])
        // @ts-ignore
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      }
      // @ts-ignore
      else if (params.tag) {
        // @ts-ignore
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      }
      else {
        this.foods = this.foodService.getAll();
      }
    })
  }

  ngOnInit(): void {
  }
}
