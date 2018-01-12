import { Component, OnInit } from '@angular/core';
import { Texte } from '../texte';

@Component({
  selector: 'app-textes',
  templateUrl: './textes.component.html',
  styleUrls: ['./textes.component.css']
})
export class TextesComponent implements OnInit {

  textes: Texte[];

  constructor(
    // private texteService: TexteService
  ) { }

  ngOnInit() {
  }

  ngOnInit() {
    this.getTextes();
  }

  getTextes(): void {
    // this.texteService.getTextes()
    //       .subscribe(textes => this.textes = textes);
  }

}
