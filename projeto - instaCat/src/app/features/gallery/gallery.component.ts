import { Component, OnInit } from '@angular/core';
import { data } from './models/data.module';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  arrayPhoto: Array<data> = [
    { img: "https://cdn2.thecatapi.com/images/9ah.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/9vg.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/9vu.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/acj.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/au9.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/b20.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/b5p.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/bdt.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/8d5.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/cfa.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/dna.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
    { img: "https://cdn2.thecatapi.com/images/dro.jpg", heart: "https://toppng.com/public/uploads/thumbnail/coracao-115507187821dyvokausr.png" },
  ]

  imprimir() {
    console.log(this.arrayPhoto)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
