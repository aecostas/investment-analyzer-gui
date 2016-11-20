import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {Output} from "@angular/core";
import {OnInit} from "@angular/core";
import {EventEmitter} from "@angular/core";
import {Fund} from '../../models/fund';
import {FundService} from '../../services/fund.service';


@Component({
    selector: 'fund',
    templateUrl: './app/funds/components/fund/fund.html',
    styleUrls: ['./app/funds/components/fund/fund.css']
})
export class FundComponent implements OnInit {
    @Input('data') data: Fund;
    @Output() addevent: EventEmitter<any> = new EventEmitter();

    private timer: number = 0;
    private delay: number = 200;
    private prevent: boolean = false;
    
    showDetails: boolean = false;

    constructor(private fundService: FundService) {
    }

    ngOnInit() {
    }

    handleClick(isin) {
	this.timer = window.setTimeout( () => {
	    if (!this.prevent) {
		this.selectFund(isin);
	    }
	    this.prevent = false;
	}, this.delay);
    }
    
    handleDblClick(event, isin) {
	event.stopPropagation();
	clearTimeout(this.timer);
	this.prevent = true;
	console.warn("double click on fund");
    }
    
    selectFund(isin) {
	this.showDetails = !this.showDetails;
	
	this.fundService.getFundDetail(isin)
 	    .subscribe(data => {
		console.warn(data);
	    });

	
    }

    handleAddToPortfolio(event, isin) {
	event.stopPropagation();
	this.addevent.next(isin);
    }


}
