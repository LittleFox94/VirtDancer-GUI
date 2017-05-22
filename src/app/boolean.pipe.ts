import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'boolean', pure: true})
export class BooleanPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? '✓' : '✗';
    }
}
