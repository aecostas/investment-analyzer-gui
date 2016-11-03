import {Component} from "@angular/core";
import {OnInit} from "@angular/core";
import {Ng2SliderComponent} from 'ng2-slider-component/ng2-slider.component';

@Component({
    selector: 'fund-search',
    templateUrl: './app/funds/components/search.html',
    styleUrls: ['./app/funds/components/search.css']
})
export class SearchComponent implements OnInit {
    regions: String[];
    sectors: String[];
    timeoutID: Number;
    
    constructor() {
	this.timeoutID = null;
	
	// United States, Latin America, Eurozone,
	// Europe Emerging, Middle East, Australasia
	// Asia Emerging, Canada, United Kingdom,
	// Europe ex-euro, Africa, Japan, Asia Developed
	this.regions = ['US', 'LA', 'EU', 'EE', 'ME', 'AU', 'AE', 'CA', 'UK', 'EX', 'AF', 'JA', 'AD'];

	// TODO: regions={US:50}

	// Cyclical: basic materials, consumer cyclical, financial services, real estate
	// Defensive: consumer defensive, healthcare, utilities
	// Sensitive: communication services, energy, industrials, technology
	this.sectors = ['BMAT', 'CCYC', 'FSER', 'REST', 'CDEF', 'HEAL', 'UTIL', 'COMM', 'ENER', 'INDU', 'TECH'];
    }

    ngOnInit() {
    }

    valueChanged(event, field, region) {
	clearTimeout(this.timeoutID);
	console.warn("New value for : ", field, region);
	this.lastChanged = new Date();
	this.timeoutID = setTimeout(() => this.populate(), 2000);
    }

    populate() {
	// trigger current selection
	console.warn("triggering changes");
    }

    
}
