import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  images:string[] = ["images/image3.jpg","images/image2.jpg","images/image1.jpg"];
  index:number =0;
  timer:number=0; 
  currentImage:string=this.images[0];
  cd = inject(ChangeDetectorRef);

   ngOnInit(): void {
    this.timer = setInterval(()=>{
    this.cd.detectChanges();
    this.index = (this.index + 1) % this.images.length;
    this.currentImage = this.images[this.index];
    },1000);
  }

  prev(){
     this.index = (this.index - 1 + this.images.length) % this.images.length;
         this.currentImage = this.images[this.index];

  }

  next(){
     this.index = (this.index + 1) % this.images.length;
         this.currentImage = this.images[this.index];

  }

  stop(){
    clearInterval(this.timer);
  }

  GetImage(index:number){
    this.index=index;
    this.currentImage=this.images[index];
  }
}
