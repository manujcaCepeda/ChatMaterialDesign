import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';
import {
  MatInputModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
  MatListModule, MatMenuModule, MatCheckboxModule, MatTabsModule, MatDialogModule
} from '@angular/material';

import { MatProgressBarModule } from '@angular/material/progress-bar';


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
    MatCheckboxModule,
    MatTabsModule,

    MatDialogModule,
    MatProgressBarModule
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
    MatCheckboxModule,
    MatTabsModule,

    MatDialogModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
