import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Fund } from '../models/fund';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FundService {

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
    
    getFunds() {
	// TODO: do not write real URLs here
	return this.http.get('http://localhost:3000/fund')
	    .map(function(response) {
		return <Fund[]>response.json();
	    });
    }
}
