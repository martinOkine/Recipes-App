import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
    ),
    new Recipe( 'Pizza','Classic margarita pizza with extra cheese and garnished with fresh herbs','https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=300'
    ),
    new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
    ),
    new Recipe( 'Burger','Classic beef burger with chips','https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=300'
    ),
  ];
}
