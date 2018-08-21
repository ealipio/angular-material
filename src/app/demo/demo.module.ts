import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

import {MaterialModule} from '../libs/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';

const modules = [
  CommonModule,
  DemoRoutingModule,
  MaterialModule,
  FormsModule
  ];

@NgModule({
  imports: modules,
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
