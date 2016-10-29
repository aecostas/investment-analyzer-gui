//import { FUNDS } from './mocks';
import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
//import { Fund } from './fund';
//import 'rxjs/add/operator/map';

@Injectable()
export class FundService {

//    constructor(private http: Http) { }

    getFunds() {
	return [{name:"fund1"}, {name:"fund2"}, {name: "fund3"}];
//	return this.http.get('app/funds.json')
//            .map(response => <Fund[]>response.json().fundsData);
  }
}
