export class VirtualMachine {
    name: string;
    uuid: string;
    active: boolean;

    // extended flags when retrieved over /vm/<uuid>
    updated: boolean;
    persistent: boolean;
    autostart: boolean;
    os: string;
    mem: number;
    maxMem: number;
    nrVirtCpu: number;

    constructor(json: any) {
        this.name   = json.name;
        this.uuid   = json.uuid;
        this.active = json.active;

        if(json.updated !== undefined) {
            this.updated = json.updated;
            this.persistent = json.persistent;
            this.autostart = json.autostart;
            this.os = json.os;
            this.mem = json.info.memory;
            this.maxMem = json.info.maxMem;
            this.nrVirtCpu = json.info.nrVirtCpu;
        }
    }

    public static fromJson(json: any): VirtualMachine {
        return new VirtualMachine(json);
    }
}
