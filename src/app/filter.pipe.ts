import {Pipe, PipeTransform} from '@angular/core';
import * as fuzzysearch      from 'fuzzysearch';

@Pipe({name: 'filter', pure: false})
export class Filter implements PipeTransform {
    transform(value: any, key: string, filter: string): any {
        if(!Array.isArray(value)) return value;
        if(filter === undefined) return value;

        var values = [];

        for(let v of value) {
            if(fuzzysearch(filter.toLowerCase(), v[key].toLowerCase())) {
                values.push(v);
            }
        }

        return values;
    }
}
