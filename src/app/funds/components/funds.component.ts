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
    
    constructor(private fundService: FundService, private zone:NgZone) {
    }

    ngOnInit() {
	this.funds = [];
	this.isins = [];
    }

    handleSelectedFundEvent(isin) {
	this.isins.push(isin);
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
    
