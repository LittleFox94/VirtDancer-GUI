import { Pipe, PipeTransform } from '@angular/core';
import { VirtualMachine }      from './data/virtual-machine';

@Pipe({name: 'VirtualMachineState', pure: true})
export class VirtualMachineStatePipe implements PipeTransform {
    transform(value: VirtualMachine): string {
        return value.active ? '▶' : '■';
    }
}
