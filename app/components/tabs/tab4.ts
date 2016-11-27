import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'tab-four',
    template: '<div>This is tab 4 executing.</div>'
})
export class TabFour implements OnDestroy, OnInit {

    private interval;

    public ngOnInit () {
        console.log('Tab 4 started execution');
        this.printExec();
    }

    public printExec () {
        this.interval = setInterval(() => {
            console.log('Tab 4 still being executed');
        }, 1000);
    }

    public ngOnDestroy () {
        console.log('Tab 4 being destroyed');
        clearInterval(this.interval);
    }
}
