import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {

  windowScrolled?: boolean;

  constructor(  @Inject(DOCUMENT) private document: Document ) { }

  @HostListener( 'window:scroll', [] )
  onWindowScroll(): void {
      if ( window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100 ) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10 ) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(): void {
      (function smoothscroll(): void {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if ( currentScroll > 0 ) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo( 0, currentScroll - (currentScroll / 8));
          }
      })();
  }

  ngOnInit(): void {
  }

}