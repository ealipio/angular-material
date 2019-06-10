import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: 'contact-manager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule' },
  {path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  {path: 'dashboard', component: DashboardComponent  },
  {path: '**', redirectTo: 'dashboard' }
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
