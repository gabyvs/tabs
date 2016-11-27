import { Component } from '@angular/core';

@Component({
    selector: 'tabs-main',
    styles: [
        `
        .header {
            background-color: #336699;
            text-align: center;
            padding: 10px;
        }
        h1 {
            color: #FFFFFF;
        }
        h4 {
            padding: 10px;
        }
        `
    ],
    template: `
    <div class="header">
        <h1>My Tabbed Component</h1>
    </div>
    <h4>Pick a tab and see your console</h4>
    <tabs></tabs>
    `
})
export class TabsMain { }
