import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
            'A super tasty Schnitzel - just awesome!',
            'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'THIC Burger',
            'Yeahhhh Boiiiiii!',
            'https://images.ladbible.com/resize?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/377858375ee281ecefb9b2eaddb2e154.png&quality=70&width=720&aspectratio=16:9',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]): void {
        this.slService.addIngredients(ingredients);
    }
}