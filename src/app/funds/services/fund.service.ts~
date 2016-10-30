//import { FUNDS } from './mocks';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Fund } from './fund';
import 'rxjs/add/operator/map';

@Injectable()
export class FundService {

    constructor(private http: Http) { }

    getFunds() {
	// TODO: do not write real URLs here
	return this.http.get('http://localhost:3000/fund')
	    .map(function(response) {
		return <Fund[]>response.json();
	    });
    }
}
