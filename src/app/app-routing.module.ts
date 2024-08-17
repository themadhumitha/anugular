import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlavoursComponent } from './flavours/flavours.component';
import { ItemsComponent } from './items/items.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [{path:'flavours',component:FlavoursComponent},
  {path:'items',component:ItemsComponent},{path:'feedback',component:FeedbackComponent},{path:'price',component:PriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
