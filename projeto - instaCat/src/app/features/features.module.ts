import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GalleryComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GalleryComponent,
    CardComponent
  ]
})
export class FeaturesModule { }
