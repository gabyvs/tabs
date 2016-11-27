import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'tab-one',
    template: '<div>This is tab 1 executing.</div>'
})
export class TabOne implements OnDestroy, OnInit {

    private interval;

    public ngOnInit () {
        console.log('Tab 1 started execution');
        this.printExec();
    }

    public printExec () {
        this.interval = setInterval(() => {
            console.log('Tab 1 still being executed');
        }, 1000);
    }

    public ngOnDestroy () {
        console.log('Tab 1 being destroyed');
        clearInterval(this.interval);
    }
}
