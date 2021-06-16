import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://cdn.newseasonsmarket.com/wp-content/uploads/2015/11/Homepage-Recipe-Text.png'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://cdn.newseasonsmarket.com/wp-content/uploads/2015/11/Homepage-Recipe-Text.png')
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}