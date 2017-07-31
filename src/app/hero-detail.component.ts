import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <form>
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>ID: </label>
        <label>{{hero.id}}</label>
      </div>
      <div>
        <label>Name: </label>
        <label>{{hero.name}}</label>
      </div>
    </div>
    </form>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
