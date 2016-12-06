import {Component} from "@angular/core";
import {Input} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    selector: 'chart',
    templateUrl: './app/funds/components/chart/chart.html'
})
export class ChartComponent implements OnInit {
    @Input('data') data: Object;

    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';
    
    constructor() {};

    ngOnInit() {};

    // events
    public chartClicked(e:any):void {
	console.log(e);
    }

    public chartHovered(e:any):void {
	console.log(e);
    }

}
