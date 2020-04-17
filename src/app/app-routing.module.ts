import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'category/:categoryId',
    component: HomePageComponent,
    data: {
      foo: 123,
      bar: 435,
      baz: 343,
      bazz: 4343
    },
    children:
      [
        {
          path: 'product/:productId',
          component: HomePageComponent,
          data: {
            bazzz: 779
          }
        }
      ]
  },
  {
    path: 'c/:categoryId/p/:productId',
    component: HomePageComponent,
    data: {
      foo: 123,
      bar: 435,
      baz: 383,
      bazz: 777
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
