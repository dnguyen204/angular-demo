import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormGroup,
    FormBuilder,
    Validators
} from '@angular/forms';
import {
    Hero
} from '../hero';

import {
    forbiddenNameValidator
} from '../forbidden-name.directive';

@Component({
    selector: 'hero-form',
    template: `
  <h2>Add New Hero</h2>
  <form [formGroup]="heroForm" (ngSubmit)="onSubmit()">
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" class="form-control"
               formControlName="name" required >
        <div [hidden]="!formErrors.name" class="alert alert-danger">
          {{ formErrors.name }}
        </div>

        <label for="email">Email</label>
        <input type="text" id="email" class="form-control"
               formControlName="email" required>
        <div [hidden]="!formErrors.email" class="alert alert-danger">
          {{ formErrors.email }}
        </div>

    </div>
    <button type="submit" class="btn btn-success" [disabled]="!heroForm.valid">Submit</button> 
</form>
  `,
    providers: [HeroService]
})
export class HeroFormComponent implements OnInit {
    // Variables
    hero: Hero;
    heroes: Hero[];
    submitted = false;
    heroForm: FormGroup;
    formErrors = {
        'name': '',
        'email': ''
    };
    validationMessages = {
        'name': {
            'required': 'Name is required.',
            'minlength': 'Name must be at least 4 characters long.',
            'maxlength': 'Name cannot be more than 24 characters long.',
            'forbiddenName': 'Someone named "Dung" cannot be a hero.'
        },
        'email': {
            'required': 'Email is required.',
            'email': 'Email is not valid.'
        }

    };
    constructor(
        private fb: FormBuilder,
        private heroService: HeroService
    ) {}

    // Function
    onSubmit() {
        this.submitted = true;
        this.hero = this.heroForm.value;
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);        
    }

    ngOnInit(): void {
        this.buildForm();
    }
    buildForm(): void {
        this.heroForm = this.fb.group({
            'name': ['', [
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24),
                forbiddenNameValidator(/Dung/i)
            ]],
            'email': ['', [
                Validators.required,
                Validators.email
            ]]
        });

        this.heroForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set validation messages now
    }

    onValueChanged(data ?: any) {
        if (!this.heroForm) {
            return;
        }
        const form = this.heroForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}
