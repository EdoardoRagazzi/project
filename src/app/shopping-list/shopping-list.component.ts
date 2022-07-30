import { Ingridient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('apple', 5),
    new Ingridient('tomato', 10),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
