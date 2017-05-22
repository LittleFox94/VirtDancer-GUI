import { Component, OnInit } from '@angular/core';

import { VirtualMachine }    from '../data/virtual-machine';
import { VirtdancerService } from '../virtdancer.service';

@Component({
    selector: 'app-virtual-machine-list',
    templateUrl: './virtual-machine-list.component.html',
    styleUrls: ['./virtual-machine-list.component.css']
})
export class VirtualMachineListComponent implements OnInit {

    virtualMachines: VirtualMachine[];
    lastError: string;
    filter: string;

    constructor(private api: VirtdancerService) { }

    ngOnInit() {
        this.api.getVirtualMachines().subscribe(
            virtualMachines => this.virtualMachines = virtualMachines,
            error           => this.lastError       = error,
        );
    }

}
