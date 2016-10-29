import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {FundService} from './fund.service';

@Component({
    templateUrl: './app/funds/components/funds.html'
})
export class FundsComponent implements OnInit {
    funds: Object[];
    
    constructor(private fundService: FundService) {
	console.warn("instanciating fund service");
	this.funds = this.fundService.getFunds();
	// .subscribe(data => this.funds = data);
    }

    ngOnInit() {
	console.warn("funds.component constructor...");
    }
}
