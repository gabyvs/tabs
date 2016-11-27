import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'tab-two',
    template: '<div>This is tab 2 executing.</div>'
})
export class TabTwo implements OnDestroy, OnInit {

    private interval;

    public ngOnInit () {
        console.log('Tab 2 started execution');
        this.printExec();
    }

    public printExec () {
        this.interval = setInterval(() => {
            console.log('Tab 2 still being executed');
        }, 1000);
    }

    public ngOnDestroy () {
        console.log('Tab 2 being destroyed');
        clearInterval(this.interval);
    }
}
