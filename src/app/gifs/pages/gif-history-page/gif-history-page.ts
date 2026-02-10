import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs-service';
import { GifListComponent } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-gif-history-page',
  imports: [GifListComponent],
  templateUrl: './gif-history-page.html',
})
export default class GifHistoryPage {

  gifService = inject(GifsService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query']))
  )

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query())
  })
}
