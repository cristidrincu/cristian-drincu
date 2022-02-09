import { Component, OnInit } from '@angular/core';
import aboutData from '../data/about.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass'],
})
export class AboutComponent implements OnInit {
  name = aboutData.about.name;
  timeline = aboutData.timeline;

  constructor() {}

  ngOnInit(): void {}
}
