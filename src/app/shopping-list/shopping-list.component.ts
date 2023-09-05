import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients = [
    new Ingredient('tomatoes', 6),
    new Ingredient('apples', 5),
    new Ingredient('banana', 4),
    new Ingredient('eggs', 12),
    new Ingredient('onions', 4),
  ];
}
