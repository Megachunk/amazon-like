import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooteerComponent} from './footeer/footeer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from  '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YourOrderComponent } from './your-order/your-order.component';
import { MatTabsModule } from '@angular/material/tabs';
import { YourOrderListComponent } from './your-order-list/your-order-list.component';
import { BuyagainListComponent } from './buyagain-list/buyagain-list.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { BetterSidebarComponent } from './better-sidebar/better-sidebar.component'; 


@NgModule({
  declarations: [FooteerComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    PostsComponent,
    LoginComponent,
    YourOrderComponent,
    YourOrderListComponent,
    BuyagainListComponent,
    BetterSidebarComponent,
    
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    MatBadgeModule,
    MatCheckboxModule,
    FormsModule,
    MatToolbarModule
    
  ],
  exports:[
    FooteerComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    PostsComponent


  ]
})
export class SharemoduleModule { }
