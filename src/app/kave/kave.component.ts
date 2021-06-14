import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kave',
  templateUrl: './kave.component.html',
  styleUrls: ['./kave.component.css']
})
export class KaveComponent implements OnInit {

  constructor() { }

  scrollToElement(element: HTMLElement): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit(): void {
  }

}
