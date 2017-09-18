import { SwService } from './sw.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw',
  templateUrl: './sw.component.html',
  styleUrls: ['./sw.component.css']
})
export class SwComponent implements OnInit {

  characters;

  constructor(swService: SwService) {
    this.characters = swService.getCharacters();
  }

  ngOnInit() {
  }

}
