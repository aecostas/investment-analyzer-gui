import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {NgZone} from '@angular/core';

import {FundService} from '../services/fund.service';

@Component({
    templateUrl: './app/funds/components/funds.html'
})
export class FundsComponent implements OnInit {
    funds: Array<Object>;
    isins: Array<String>;
    portfolio: String;

    constructor(private fundService: FundService, private zone:NgZone) {
    }

    ngOnInit() {
	this.funds = [];
	this.isins = [];

	this.fundService.createPortfolio()   
	    .then(data => {
		console.warn("created portfolio: ", data);
		this.portfolio = data;
	    });	
    }

    handleSelectedFundEvent(isin) {
	this.isins.push(isin);

	this.fundService.getFundDetail(isin)
	    .subscribe(data => {
		console.warn(data);
	    });
	
//	this.fundService.addFundToPortfolio(this.portfolio, isin, 1000)
//	    .then(data => {
//		console.warn(data);
//	    });
    }

    handleSearchEvent(arg) {
	this.fundService.getFunds()
	    .subscribe(data => {
		this.funds = data;
		// TODO: find out why this is needed
		this.zone.run(() => {
		    console.log('hack for refreshing');
		});
	    });	
    }
}
