import { Recipe } from '../recipe.model';
import { Component, OnInit } from '@angular/core';
Recipe
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [

    new Recipe( 'A Test Recipe', 'This is a simply test', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2020%2F03%2F03%2F7782449.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
