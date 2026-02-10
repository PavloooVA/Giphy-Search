import { AfterViewInit, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs-service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state-service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.html',
})
export default class TrendingPage implements AfterViewInit {

  gifService = inject(GifsService)
  scrollStateService = inject(ScrollStateService)

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement
    if(!scrollDiv) return

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState()
  }

  onScroll(e: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement
    if(!scrollDiv) return

    const scrollTop: number = scrollDiv.scrollTop
    const clientHeght: number = scrollDiv.clientHeight
    const scrollHeight: number = scrollDiv.scrollHeight

    const isAtBottom: boolean = scrollTop + clientHeght + 300 >= scrollHeight

    this.scrollStateService.trendingScrollState.set(scrollTop)
    
    if(isAtBottom) {
      this.gifService.loadTrendingGifs()
    }
  }

}
