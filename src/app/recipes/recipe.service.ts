import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe(
            'Garden Salad',
             'Simple and delicious!',
              'https://cdn3.tmbi.com/toh/GoogleImagesPostCard/Armenian-Garden-Salad_exps47594_TH2236620A05_31_3bC_RMS.jpg',
              [
                  new Ingredient('Lettuce', 1),
                  new Ingredient('Tomatoes', 5),
                  new Ingredient('Onions', 1),
                  new Ingredient('Cucumbers', 1)
              ]),
        new Recipe(
            'Beyond Burger',
             'Our take on a vegan burger!',
              'https://gp1.com/wp-content/uploads/2018/08/Hamburger.jpg',
              [
                new Ingredient('Lettuce', 1),
                new Ingredient('Tomatoes', 1),
                new Ingredient('Onions', 1),
                new Ingredient('Buns', 2),
                new Ingredient('Ketchup', 1),
                new Ingredient('Mustard', 1),
                new Ingredient('Pickles', 1),
                new Ingredient('Beyond Burger', 1),
              ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes.slice()[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}