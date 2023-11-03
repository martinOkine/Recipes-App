import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {

  ingredients = [
    new Ingredient('tomatoes', 6),
    new Ingredient('apples', 5),
    new Ingredient('banana', 4),
    new Ingredient('eggs', 12),
    new Ingredient('onions', 4),
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() {}

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
