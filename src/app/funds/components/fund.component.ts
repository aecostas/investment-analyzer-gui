import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {OnInit} from "@angular/core";
import { Fund } from '../models/fund';

@Component({
    selector: 'fund',
    templateUrl: './app/funds/components/fund.html'
})
export class FundComponent implements OnInit {
    @Input('data') data: Fund;
    
    constructor() {
    }

    ngOnInit() {
    }

}
