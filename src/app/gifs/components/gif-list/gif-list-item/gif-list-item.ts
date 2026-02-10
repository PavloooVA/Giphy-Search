import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItemComponent {
  imageUrl = input.required<string>()
}
