import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement){
    const ingredient = new Ingredient(nameInput.value, +amountInput.value)
    this.addIngredient.emit(ingredient);
  }
}
