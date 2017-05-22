import { Component }  from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    ram_chart_unit: number = 1;
    net_chart_unit: number = 1;

    constructor() {
    }

}
