import { BrowserModule }                 from '@angular/platform-browser';
import { NgModule }                      from '@angular/core';
import { FormsModule }                   from '@angular/forms';
import { HttpModule }                    from '@angular/http';
import { RouterModule, Routes }          from '@angular/router';

import { ChartModule }                   from 'angular2-chartjs';

import { OrderBy }                       from './order-by.pipe';
import { Filter }                        from './filter.pipe';
import { Memory }                        from './memory.pipe';
import { BooleanPipe }                   from './boolean.pipe';
import { VirtualMachineStatePipe }       from './virtual-machine-state.pipe';
import { VirtualMachineSortPipe }        from './virtual-machine-sort.pipe';

import { AppComponent }                  from './app.component';
import { DashboardComponent }            from './dashboard/dashboard.component';
import { ConfigurationComponent }        from './configuration/configuration.component';
import { VirtualMachineListComponent }   from './virtual-machine-list/virtual-machine-list.component';
import { VirtualMachineWizardComponent } from './virtual-machine-wizard/virtual-machine-wizard.component';
import { VirtualMachineDetailComponent } from './virtual-machine-detail/virtual-machine-detail.component';

import { VirtdancerService }             from './virtdancer.service';
import { RestChartComponent }            from './rest-chart/rest-chart.component';

const appRoutes: Routes = [
    { path: '',                 redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',        component: DashboardComponent },
    { path: 'create',           component: VirtualMachineWizardComponent },
    { path: 'config',           component: ConfigurationComponent },
    { path: 'vm-detail/:id',    component: VirtualMachineDetailComponent },
];

@NgModule({
    declarations: [
        AppComponent,
        VirtualMachineListComponent,
        DashboardComponent,
        VirtualMachineWizardComponent,
        ConfigurationComponent,
        VirtualMachineDetailComponent,
        RestChartComponent,

        OrderBy,
        Filter,
        Memory,
        BooleanPipe,
        VirtualMachineStatePipe,
        VirtualMachineSortPipe,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        ChartModule,
    ],
    providers: [
        VirtdancerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
