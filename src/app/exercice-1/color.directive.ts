import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appColor]'
})
export class ColorDirective {
    @HostBinding('style.color') stylas: string;

    @HostListener("window:keydown", ["$event"]) SetColor(event) {
        if(event.key == "ArrowDown"){
            this.stylas = 'red';
        }else if(event.key == "ArrowLeft") {
            this.stylas = 'green';
        }else if(event.key == "ArrowRight") {
            this.stylas = 'grey';
        }else if(event.key == "ArrowUp") {
            this.stylas = 'yellow';
        }
    }
}