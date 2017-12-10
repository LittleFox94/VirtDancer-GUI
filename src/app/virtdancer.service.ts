import { Injectable }     from '@angular/core';
import { HttpClient }     from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { VirtualMachine } from './data/virtual-machine';

@Injectable()
export class VirtdancerService {
    constructor(private http: HttpClient) { }

    getVirtualMachines() : Observable<VirtualMachine[]> {
        return this.http.get<Array<VirtualMachine>>('/api/vm')
                        .catch(this.handleError);
    }

    getVirtualMachine(uuid: string) : Observable<VirtualMachine> {
        return this.http.get('/api/vm/' + uuid)
                        .map(data => VirtualMachine.fromJson(data))
                        .catch(this.handleError);
    }

    private buildVirtualMachine(res: Response): VirtualMachine {
        return VirtualMachine.fromJson(res.json());
    }

    getCpuUsage(): Observable<any> {
        return this.http.get('/api/stats/cpu').map(res => res);
    }

    private handleError(error: Response | any) {
        return Observable.throw('Error retrieving virtual machines');
    }
}
