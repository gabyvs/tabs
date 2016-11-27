import { Component } from '@angular/core';

import { Tab } from '../../domain/tab';

declare var require: any;
const template: string = require('./tabs.html');

@Component({
    selector: 'tabs',
    template: template,
})
export class Tabs {

    public tabs: Tab[] = [
        new Tab('Tab 1', '/one'),
        new Tab('Tab 2', '/two'),
        new Tab('Tab 3', '/three'),
        new Tab('Tab 4', '/four')
    ];

}
