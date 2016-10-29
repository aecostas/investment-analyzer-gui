//import { FUNDS } from './mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Fund } from './fund';
import 'rxjs/add/operator/map';

@Injectable()
export class FundService {
    
    constructor(private http: Http) { }
    
    getFunds() {
	console.warn("Retrieving funds...");
	return this.http.get('app/funds.json')
            .map(response => <Fund[]>response.json().fundsData);
  }
}
