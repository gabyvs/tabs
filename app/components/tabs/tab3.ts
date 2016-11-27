import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'tab-three',
    template: '<div>This is tab 3 executing.</div>'
})
export class TabThree implements OnDestroy, OnInit {

    private interval;

    public ngOnInit () {
        console.log('Tab 3 started execution');
        this.printExec();
    }

    public printExec () {
        this.interval = setInterval(() => {
            console.log('Tab 3 still being executed');
        }, 1000);
    }

    public ngOnDestroy () {
        console.log('Tab 3 being destroyed');
        clearInterval(this.interval);
    }
}
