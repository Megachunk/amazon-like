import { BuyagainListComponent } from './sharemodule/buyagain-list/buyagain-list.component';
import { YourOrderListComponent } from './sharemodule/your-order-list/your-order-list.component';
import { YourOrderComponent } from './sharemodule/your-order/your-order.component';
import { LoginComponent } from './sharemodule/login/login.component';
import { HomeComponent } from './sharemodule/home/home.component';
import { PostsComponent } from './sharemodule/posts/posts.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'', component:DefaultComponent
,
children:[{
    path:'', component: HomeComponent
},{
    path: 'posts', component: PostsComponent
},{
    path:'loginWindow',component:LoginComponent
}, {
    path: 'yourorder', component: YourOrderComponent,
    children: [{
      path: '', component: YourOrderListComponent
    },{
      path:'yourorderlist',component:YourOrderListComponent
    },{
        path: 'buyagain', component: BuyagainListComponent
    }]
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
