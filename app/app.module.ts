import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule }     from '@angular/router';

import { AppComponent } from './app.component';
import { TabsMain }     from './components/tabs-main';
import { Tabs }         from './components/tabs/tabs';
import { TabOne }       from './components/tabs/tab1';
import { TabTwo }       from './components/tabs/tab2';
import { TabThree }     from './components/tabs/tab3';
import { TabFour }      from './components/tabs/tab4';
import { appRoutes }    from './app.routing';

@NgModule({
    bootstrap:    [ AppComponent ],
    declarations: [
        AppComponent,
        Tabs,
        TabsMain,
        TabOne,
        TabTwo,
        TabThree,
        TabFour
    ],
    imports:      [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppModule {}
