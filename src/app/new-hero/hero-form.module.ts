import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//import { SharedModule }              from '../shared/shared.module';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
  imports:      [ 
    //SharedModule, 
    ReactiveFormsModule
  ],
  declarations: [ HeroFormComponent ],
  exports:      [ HeroFormComponent ]
})
export class HeroFormModule { }
