import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: 'chart',
    templateUrl: './app/funds/components/chart/chart.html'
})
export class ChartComponent implements OnInit {
    @Input('data') data: Object;

    constructor() {};

    ngOnInit() {};

}
