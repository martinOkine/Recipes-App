import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes?: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
  //   ),
  //   new Recipe( 'Pizza','Classic margarita pizza with extra cheese and garnished with fresh herbs','https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300'
  //   ),
  //   new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
  //   ),
  //   new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
  //   ),
  // ];

  

  constructor(private recipeService: RecipeService){

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }
}
