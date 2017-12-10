import {Pipe, PipeTransform} from '@angular/core';
import { VirtualMachine }    from './data/virtual-machine';

@Pipe({name: 'virtualMachineSort', pure: true})
export class VirtualMachineSortPipe implements PipeTransform {
    transform(value: VirtualMachine[]): VirtualMachine[] {
        if(value === undefined) {
            return value;
        }

        value.sort((a, b) => {
            if(a.active && !b.active) return -1;
            if(!a.active && b.active) return  1;

            if(a.name.toLowerCase() > b.name.toLowerCase()) return  1;
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;

            return 0;
        });

        return value;
    }
}
