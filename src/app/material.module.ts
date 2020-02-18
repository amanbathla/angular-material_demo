import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatInputModule,MatNativeDateModule,MatFormFieldModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule,MatStepperModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule,MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatStepperModule],
  exports: [CommonModule,MatInputModule, MatButtonModule,MatFormFieldModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,MatStepperModule],
})
export class CustomMaterialModule { }
