import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { VirtualMachine } from './data/virtual-machine';

@Injectable()
export class VirtdancerService {
    constructor(private http: Http) { }

    getVirtualMachines() : Observable<VirtualMachine[]> {
        return this.http.get('/api/vm')
                        .map(this.buildVirtualMachineArray)
                        .catch(this.handleError);
    }

    private buildVirtualMachineArray(res: Response): VirtualMachine[] {
        return res.json().map(VirtualMachine.fromJson);
    }

    getVirtualMachine(uuid: string) : Observable<VirtualMachine> {
        return this.http.get('/api/vm/' + uuid)
                        .map(this.buildVirtualMachine)
                        .catch(this.handleError);
    }

    private buildVirtualMachine(res: Response): VirtualMachine {
        return VirtualMachine.fromJson(res.json());
    }

    getCpuUsage(): Observable<any> {
        return this.http.get('/api/stats/cpu').map(res => res.json());
    }

    private handleError(error: Response | any) {
        return Observable.throw('Error retrieving virtual machines');
    }
}
