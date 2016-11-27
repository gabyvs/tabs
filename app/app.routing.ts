import { Routes }   from '@angular/router';
import { TabOne }   from './components/tabs/tab1';
import { TabTwo }   from './components/tabs/tab2';
import { TabThree } from './components/tabs/tab3';
import { TabFour }  from './components/tabs/tab4';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/one' },
    { component: TabOne, path: 'one' },
    { component: TabTwo, path: 'two' },
    { component: TabThree, path: 'three' },
    { component: TabFour, path: 'four' }
];
