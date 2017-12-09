import {
    Component,
    SimpleChange,
    OnChanges,
    OnDestroy,
    OnInit,
    ViewChild,
    Input
} from '@angular/core';

import { DatePipe }                                                  from '@angular/common';
import { Http }                                                      from '@angular/http';
import { ChartComponent }                                            from 'angular2-chartjs';
import { IntervalObservable }                                        from 'rxjs/observable/IntervalObservable';
import { VirtdancerService }                                         from '../virtdancer.service';

@Component({
  selector: 'rest-chart',
  templateUrl: './rest-chart.component.html',
  styleUrls: ['./rest-chart.component.css']
})
export class RestChartComponent implements OnInit, OnDestroy, OnChanges {
    colors: string[] = [
        '#5DA5DA',
        '#FAA43A',
        '#60BD68',
        '#F17CB0',
        '#B2912F',
        '#B276B2',
        '#DECF3F',
        '#F15854',
    ];

    options: any;
    data: any;
    observable: any;

    @Input() apiUrl: string;
    @Input() datasets: string[] = [];
    @Input() maxData: number = 20;
    @Input() divisor: number = 1;
    @Input() mode: string = 'raw';
    @ViewChild('chart') chart: ChartComponent;

    constructor(private api: VirtdancerService, private http: Http) { }

    ngOnInit() {
        this.reset();
    }

    reset() {
        if(this.observable) {
            this.observable.unsubscribe();
        }

        let closureThis = this;

        this.options = {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 250,
            },
        };

        if(this.mode == 'percentage') {
            this.options.scales = {
                yAxes: [{
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        beginAtZero: true,
                    },
                }],
            };
        }

        this.data = {
            labels: [],
            datasets: [],
        };

        var i = 0;
        for(let key of this.datasets) {
            this.addDataSet(key);
        }

        this.observable = IntervalObservable.create(1000).subscribe(() => {
            this.http.get('/api' + this.apiUrl).subscribe(
                res => {
                    let data = res.json();
                    let time = new Date();

                    if(closureThis.data.labels.length > this.maxData) {
                        closureThis.data.labels.shift();
                    }

                    let datePipe      = new DatePipe('en-us');
                    let formattedTime = datePipe.transform(time, 'HH:mm:ss');
                    closureThis.data.labels.push(formattedTime);

                    for(let key in data) {
                        var foundDataset: boolean = false;

                        for(let dataset of closureThis.data.datasets) {
                            if(dataset.label == key) {
                                if(dataset.data.length > this.maxData) {
                                    dataset.data.shift();
                                }

                                var value = data[key];

                                if(closureThis.mode == 'difference') {
                                    if(dataset.previousValue !== undefined) {
                                        value -= dataset.previousValue;
                                    }
                                    else {
                                        value = 0;
                                    }

                                    dataset.previousValue = data[key];
                                }

                                dataset.data.push(value / this.divisor);
                                foundDataset = true;
                            }
                        }

                        if(!foundDataset && this.datasets.length == 0) {
                            let dataset = this.addDataSet(key);

                            if(dataset.data.length > this.maxData) {
                                dataset.data.shift();
                            }

                            dataset.data.push(value / this.divisor);
                        }
                    }

                    closureThis.chart.chart.update();
                }
            );
        });    }

    ngOnDestroy() {
        this.observable.unsubscribe();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for(let property in changes) {
            if(property == 'divisor') {
                let changedProperty = changes[property];

                if(this.data && this.data.datasets) {
                    let oldDivisor = changedProperty.isFirstChange() ? 1 : changedProperty.previousValue;
                    let newDivisor = changedProperty.currentValue;

                    for(let dataset of this.data.datasets) {
                        dataset.data = dataset.data.map((x) => { return x * oldDivisor / newDivisor });
                    }
                }
            }
            else if(property == 'apiUrl') {
                this.reset();
            }
        }
    }

    addDataSet(name: string) {
        let dataset = {
            label: name,
            data: [],
            borderWidth: 2,
            borderColor: this.colors[(this.data.datasets.length) % this.colors.length],
            backgroundColor: 'transparent',
            pointRadius: 1,
        };

        this.data.datasets.push(dataset);

        let datacount: number = this.data.datasets[0].data.length;

        for(var i = 0; i < datacount; i++) {
            dataset.data.push(null);
        }

        this.data.datasets.sort((a1, a2) => {
            if(a1.label > a2.label) {
                return 1;
            }
            else if(a1.label < a2.label) {
                return -1;
            }
            else {
                return 0;
            }
        });

        return dataset;
    }
}
