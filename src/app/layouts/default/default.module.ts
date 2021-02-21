import { MatButtonModule } from '@angular/material/button';
import { SharemoduleModule } from './../../sharemodule/sharemodule.module';
import { FooteerComponent } from './../../sharemodule/footeer/footeer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharemoduleModule,
    MatButtonModule
  ]
})
export class DefaultModule { }
