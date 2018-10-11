import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatMenuModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatTabsModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSlideToggleModule
} from "@angular/material";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSlideToggleModule
  ]
})
export class MaterialModule {}
