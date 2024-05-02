import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Stake Recipe', 'Grill Tip Tip Stake', 'https://hips.hearstapps.com/hmg-prod/images/delish-220517-grilled-tri-tip-001-ab-web-1654036132.jpg?crop=1.00xw:0.750xh;0,0.0913xh&resize=1200:*'),
    new Recipe('Chicken Recipe', 'Roasted chicken', 'https://www.inspiredtaste.net/wp-content/uploads/2023/08/Simple-Whole-Roasted-Recipe-Video.jpg')
  ];

}
