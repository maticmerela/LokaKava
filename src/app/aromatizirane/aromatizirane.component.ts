import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aromatizirane',
  templateUrl: './aromatizirane.component.html',
  styleUrls: ['./aromatizirane.component.css']
})
export class AromatiziraneComponent implements OnInit {

  constructor() { }

  scrollToElement(element: HTMLElement): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  ngOnInit(): void {
  }

}
