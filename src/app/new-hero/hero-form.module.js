"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//import { SharedModule }              from '../shared/shared.module';
var hero_form_component_1 = require("./hero-form.component");
var HeroFormModule = (function () {
    function HeroFormModule() {
    }
    return HeroFormModule;
}());
HeroFormModule = __decorate([
    core_1.NgModule({
        imports: [
            //SharedModule, 
            forms_1.ReactiveFormsModule
        ],
        declarations: [hero_form_component_1.HeroFormComponent],
        exports: [hero_form_component_1.HeroFormComponent]
    })
], HeroFormModule);
exports.HeroFormModule = HeroFormModule;
//# sourceMappingURL=hero-form.module.js.map