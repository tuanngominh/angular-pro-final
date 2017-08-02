import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { MealsComponent } from './meals-page/meals-page.component';
import { MealComponent } from './meal-page/meal-page.component';


export const ROUTES: Routes = [
  { path: '', component: MealsComponent },
  { path: 'new', component: MealComponent },
  { path: ':id', component: MealComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
