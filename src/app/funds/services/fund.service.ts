import { FUNDS } from './mocks';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Fund } from '../models/fund';
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


// import { Injectable } from '@angular/core';
// import { URLSearchParams, Jsonp } from '@angular/http';

// @Injectable()
// export class FundService {
//     constructor(private jsonp: Jsonp) {}

//     getFunds () {
// 	var search = new URLSearchParams();
// 	search.set('format', 'json');
// 	return this.jsonp
// 	    .get('http://localhost:3000/fund')
// 	    .toPromise()
// 	    .then((response) => response.json()[1]);
//     }
// }
