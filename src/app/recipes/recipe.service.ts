import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Classic beef burger with chips',
      'https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300',
      [
        new Ingredient('buns', 10),
        new Ingredient('cheese', 6),
        new Ingredient('patty', 1),
        new Ingredient('tomato', 5),
      ]
    ),
    new Recipe(
      'Pizza',
      'Classic margarita pizza with extra cheese and garnished with fresh herbs',
      'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300',
      [
        new Ingredient('dough', 1),
        new Ingredient('cheese', 4),
        new Ingredient('salami', 3),
        new Ingredient('tomato', 5),
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return this.recipes.slice();
    return this.recipes;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
