import { Component } from '@angular/core';

@Component({ // Decorateur
  selector: 'app-root', // comment appeler un composant <app-root></app-root>
  templateUrl: './app.component.html', // style "visible" HTML
  styleUrls: ['./app.component.css'] // style associé au rendu HTML du composant
})
export class AppComponent { // partie "logique"
  title = 'tour-of-heroes';
}
