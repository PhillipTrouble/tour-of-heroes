import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HeroService } 'from 'import { Hero } from '../hero';
 ../HeroService';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.selectedHero = hero;
  }

  getHeroes () {
    this.heroes = this.heroService.getHeroes();
  }

}
