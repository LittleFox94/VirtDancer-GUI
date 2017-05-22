import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'memory', pure: true})
export class Memory implements PipeTransform {
    transform(value: number): string {
        let units   = [ 'B', 'KiB', 'MiB', 'GiB', 'TiB' ];
        let convert = 1024;

        var unit = 0;

        while(Math.floor(value / convert) > 0) {
            value /= convert;
            unit++;
        }

        return value + ' ' + units[unit];
    }
}
