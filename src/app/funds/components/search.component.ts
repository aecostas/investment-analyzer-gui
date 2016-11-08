import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {Output} from "@angular/core";

import {Ng2SliderComponent} from 'ng2-slider-component/ng2-slider.component';

@Component({
    selector: 'fund-search',
    templateUrl: './app/funds/components/search.html',
    styleUrls: ['./app/funds/components/search.css']
})
export class SearchComponent implements OnInit {
    @Output() searchevent: EventEmitter<any> = new EventEmitter();
    private timeoutID;
    private lastChanged: Date;
    private pattern;
    private sectors_out;

    regions: String[];
    sectors: String[];

    constructor() {
	this.timeoutID = null;

	// United States, Latin America, Eurozone,
	// Europe Emerging, Middle East, Australasia
	// Asia Emerging, Canada, United Kingdom,
	// Europe ex-euro, Africa, Japan, Asia Developed
	this.regions = ['US', 'LA', 'EU', 'EE', 'ME', 'AU', 'AE', 'CA', 'UK', 'EX', 'AF', 'JA', 'AD'];

	// Cyclical: basic materials, consumer cyclical,
	//           financial services, real estate
	// Defensive: consumer defensive, healthcare,
	//            utilities
	// Sensitive: communication services, energy,
	//            industrials, technology
	this.sectors = ['BMAT', 'CCYC', 'FSER', 'REST', 'CDEF', 'HEAL', 'UTIL', 'COMM', 'ENER', 'INDU', 'TECH'];

	// TODO: unify this.pattern.region and this.regions (same for sectors)
	// , that is, feed the template with the JSON
	this.pattern = {};
	this.pattern.region = {};
	this.pattern.region['US'] = 50;
	this.pattern.region['LA'] = 50;
	this.pattern.region['EU'] = 50;
	this.pattern.region['EE'] = 50;
	this.pattern.region['ME'] = 50;
	this.pattern.region['AU'] = 50;
	this.pattern.region['AE'] = 50;
	this.pattern.region['CA'] = 50;
	this.pattern.region['UK'] = 50;
	this.pattern.region['EX'] = 50;
	this.pattern.region['AF'] = 50;
	this.pattern.region['JA'] = 50;
	this.pattern.region['AD'] = 50;

	this.pattern.sector = {};
	this.pattern.sector['BMAT'] = 50;
	this.pattern.sector['CCYC'] = 50;
	this.pattern.sector['FSER'] = 50;
	this.pattern.sector['REST'] = 50;
	this.pattern.sector['CDEF'] = 50;
	this.pattern.sector['HEAL'] = 50;
	this.pattern.sector['UTIL'] = 50;
	this.pattern.sector['COMM'] = 50;
	this.pattern.sector['ENER'] = 50;
	this.pattern.sector['INDU'] = 50;
	this.pattern.sector['TECH'] = 50;


    }

    ngOnInit() {
    }

    valueChanged(event, field, code) {
	clearTimeout(this.timeoutID);
	this.pattern[field][code] = Number(event.startValue);
	this.lastChanged = new Date();
	this.timeoutID = setTimeout(() => this.populate(), 2000);
    }

    populate() {
	this.searchevent.next(this.pattern);
    }

}
