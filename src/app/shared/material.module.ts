import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatMenuModule, MatCheckboxModule
} from '@angular/material';


@NgModule({
  imports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatMenuModule, 
    MatCheckboxModule
  ],
  exports: [
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
