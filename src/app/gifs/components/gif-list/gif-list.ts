import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.html',
})
export class GifListComponent {
  gifs = input.required<Gif[]>()
}
