import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {MaterialModule} from '../libs/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';

import { FlexboxComponent } from './flexbox/flexbox.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';

const modules = [
  CommonModule,
  DemoRoutingModule,
  MaterialModule,
  FormsModule,
  FlexLayoutModule,
  ];

@NgModule({
  imports: modules,
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule { }
