import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  // @Output() addIngredient = new EventEmitter<Ingredient>();

  constructor(private ShoppingListService: ShoppingListService) {}

  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const ingredient = new Ingredient(nameInput.value, +amountInput.value);
    this.ShoppingListService.addIngredient(ingredient);
  }
}
