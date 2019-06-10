import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MaterialModule} from '../libs/material/material.module';
import { FormsModule } from '@angular/forms';
// import { FlexLayoutModule} from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { ContactManagerAppComponent } from './contact-manager-app.component';
import { MainContentComponent } from './components/main-content.component';
import { ToolbarComponent } from './components/toolbar.component';
import { SideNavComponent } from './components/side-nav.component';

const routes: Routes = [
  {path: '', component: ContactManagerAppComponent, children: [{path: '', component: MainContentComponent}] },
  {path: '**', redirectTo: '' }
];

const modules = [
  MaterialModule,
  FormsModule,
  // FlexLayoutModule,
  CommonModule,
  RouterModule.forChild(routes),
];

@NgModule({
  imports: modules,
  declarations: [ContactManagerAppComponent, ToolbarComponent, MainContentComponent, SideNavComponent]
})
export class ContactManagerModule { }
