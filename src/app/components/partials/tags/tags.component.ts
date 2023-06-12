import { Component } from '@angular/core';
import {Tag} from "../../models/Tag";
import {FoodService} from "../../../services/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags ?: Tag[];

  constructor(foodService: FoodService) {
    this.tags = foodService.getAllTags();
  }
}
