import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    templateUrl: './app/funds/components/funds.html'
})
export class FundsComponent /*implements OnInit*/ {

    constructor(private fundService: FundService) {
    }

    ngOnInit() {
	console.warn("funds.component constructor...");
    }
}
