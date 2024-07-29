import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-body',
  templateUrl: './gallery-body.component.html',
  styleUrl: './gallery-body.component.css'
})
export class GalleryBodyComponent  {
  imagePaths: string[] = ["gallery/gallery_img_1.jpg", "gallery/gallery_img_2.jpg", "gallery/gallery_img_3.jpg", "gallery/gallery_img_4.jpg", "gallery/gallery_img_5.jpg"];

  
}
