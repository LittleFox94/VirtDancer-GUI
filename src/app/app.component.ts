import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title               = 'VirtDancer';
    vmListVisible       = false;
    overflowMenuVisible = false;

    toggleVmList() {
        this.vmListVisible = !this.vmListVisible;
    }

    toggleOverflowMenu() {
        this.overflowMenuVisible = !this.overflowMenuVisible;
    }
}
