import { Injectable } from '@angular/core';
import { Food } from '../components/models/Food';
import {sample_foods, sample_tags} from 'src/data';
import {Tag} from "../components/models/Tag";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string): Food[] | null {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(id: string) {
    return this.getAll().filter(food => food.id === id);
  }
}
