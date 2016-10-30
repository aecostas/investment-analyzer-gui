import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {FundService} from './fund.service';

console.log("outside...");
@Component({
    templateUrl: './app/funds/components/funds.html'
})
export class FundsComponent implements OnInit {
    funds: Object[];
    
    constructor(private fundService: FundService) {
    }

    ngOnInit() {
	console.warn("funds.component constructor...");
	this.fundService.getFunds()
	    .subscribe(data => this.funds = data);

    }
}
