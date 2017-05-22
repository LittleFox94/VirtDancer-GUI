import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

import { VirtualMachine }    from '../data/virtual-machine';
import { VirtdancerService } from '../virtdancer.service';

@Component({
  selector: 'app-virtual-machine-detail',
  templateUrl: './virtual-machine-detail.component.html',
  styleUrls: ['./virtual-machine-detail.component.css']
})
export class VirtualMachineDetailComponent implements OnInit {

    vm: VirtualMachine;
    lastError: string;

    constructor(private api: VirtdancerService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.api.getVirtualMachine(params['id']).subscribe(
                    vm    => this.vm = vm,
                    error => this.lastError = error,
                );
            },
        );
    }

}
