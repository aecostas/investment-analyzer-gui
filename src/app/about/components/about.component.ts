import {Component} from "@angular/core";
import {OnInit} from "@angular/core";

@Component({
    templateUrl: './app/about/components/about.html'
})
export class AboutComponent implements OnInit {

    constructor() {
	console.log("about component");
    }
    
    ngOnInit() {
	console.log("ngoninit about");
    }
}
