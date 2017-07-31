"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var forbidden_name_directive_1 = require("../forbidden-name.directive");
var HeroFormComponent = (function () {
    function HeroFormComponent(fb) {
        this.fb = fb;
        this.submitted = false;
        this.formErrors = {
            'name': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Dung" cannot be a hero.'
            }
        };
    }
    // Function
    HeroFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.hero = this.heroForm.value;
    };
    HeroFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    HeroFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.heroForm = this.fb.group({
            'name': ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(24),
                    forbidden_name_directive_1.forbiddenNameValidator(/Dung/i)
                ]
            ]
        });
        this.heroForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    HeroFormComponent.prototype.onValueChanged = function (data) { };
    return HeroFormComponent;
}());
HeroFormComponent = __decorate([
    core_1.Component({
        selector: 'hero-form',
        template: './hero-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HeroFormComponent);
exports.HeroFormComponent = HeroFormComponent;
//# sourceMappingURL=hero-form.component.js.map