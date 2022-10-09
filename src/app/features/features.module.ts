import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppFirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppFirstComponent, SecondComponent],
})
export class FeaturesModule {}
