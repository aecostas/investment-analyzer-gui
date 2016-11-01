import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import {Ng2SliderComponent} from 'ng2-slider-component/ng2-slider.component';
import { Ng2StyledDirective } from 'ng2-styled-directive/ng2-styled.directive';
import { SlideAbleDirective } from 'ng2-slideable-directive/slideable.directive';

import {AppComponent} from "./app.component";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {TaskComponent} from "./todo/components/task.component";
import {SearchComponent} from "./funds/components/search.component";

import {FundsComponent} from "./funds/components/funds.component";

import {FundService} from "./funds/services/fund.service";


import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
	HttpModule,
        routing,
	Ng2BootstrapModule
    ],
    declarations: [
        AppComponent,
        TaskComponent,
        TaskListComponent,
        AboutComponent,
	FundsComponent,
	SearchComponent,
	SlideAbleDirective,
	Ng2StyledDirective,
	Ng2SliderComponent
    ],
    providers: [
        appRoutingProviders,
	FundService
    ],
    exports: [
	Ng2SliderComponent,
	Ng2StyledDirective
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
