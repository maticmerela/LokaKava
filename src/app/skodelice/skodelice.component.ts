import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skodelice',
  templateUrl: './skodelice.component.html',
  styleUrls: ['./skodelice.component.css']
})
export class SkodeliceComponent implements OnInit {

  constructor() { }

  scrollToElement(element: HTMLElement): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit(): void {
  }

}
