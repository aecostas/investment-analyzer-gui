import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Fund } from '../models/fund';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FundService {
    private fundDetails = {};
    private observable_details: Observable<any>;

    constructor(private http: Http) { }

    createPortfolio() {
	// TODO: do not write real URLs here
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });

	return this.http.post('http://localhost:3000/portfolio', {}, options)
	    .toPromise()
	    .then(function(response) {
		let body = response.json();
		console.warn('portfolioid: ', body.id);
		return body.id;
	    });
    }


    addFundToPortfolio(portfolio_id, isin, invest: Number) {
	let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
	let options = new RequestOptions({ headers: headers });
	let urlSearchParams = new URLSearchParams();
	urlSearchParams.append('invest', String(invest));
	let body = urlSearchParams.toString();

	return this.http.post(`http://localhost:3000/portfolio/${portfolio_id}/funds/${isin}`, body, options)
	    .toPromise()
	    .then(function(response) {
		return response.json();
	    });
    }

    getFundDetail(isin) {
	if (this.fundDetails[isin] != null) {
	    return Observable.of(this.fundDetails[isin]); 
	} else if (this.observable_details) {
	    // request in progress
	    return this.observable_details;
	} else {
	    return this.observable_details = this.http.get('http://localhost:3000/fund/' + isin)
		.map(response => {
		    this.observable_details = null;
		    this.fundDetails[isin] = response.json();
		    return response.json();
		})
		.share();
	}
	// http://stackoverflow.com/questions/36271899/what-is-the-correct-way-to-share-the-result-of-an-angular-2-http-network-call-in
    }

    getFunds() {
	// TODO: do not write real URLs here
	return this.http.get('http://localhost:3000/fund')
	    .map(function(response) {
		return <Fund[]>response.json();
	    });
    }
}
