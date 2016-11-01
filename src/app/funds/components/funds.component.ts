import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {FundService} from '../services/fund.service';

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
