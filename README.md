Tabs SPA
========

Single Page Application (SPA) with tabs using Angular 2.

This SPA is packaged using Webpack and during development mode it needs to run a NodeJS server to allow Webpack
to _transpile_ and package all files dynamically.

This is a TypeScript/JavaScript project and its NPM root will be the directory were you cloned the repo and
where this README file is located. All `npm`/`yarn` commands are expected to be used at this _root_ directory.

## Setting up your environment

* If you don't have it, install or update NodeJS 6.0 or newer
* Install Typings (npm -g install typings)
* Install Yarn (npm -g install yarn) (this is optional, you can run it with npm only)
* Clone this repository
* Run `yarn` or alternatively `npm install`. This will install all NPM and Typings dependencies. 

## Starting a development server

Run `yarn start` or `npm start` to run the development servers: A redirect proxy and the Webpack dev server.

The application will be available on your browser at [localhost:3000](http://localhost:3000).

## How does it work

This is using angular router and bootstrap tab components. It builds 4 tabs and 4 components and shows how only one component is being executed at a time. 
Open your browser console to check the information that the components provide.
Check out the following files for more information.

### tab.ts
There is a model for each tab that sets each tab title and the route or URL path that the tab will set when selected.

### app.routing.ts
Add one route per each tab needed. Create a component that will have the functionality that tab needs.

### tab#.ts
Four sample components for the four sample tabs. Each one will print to the console when the component is created, destroyed, and while it is being executed.
This is just to illustrate that only one component is being executed each moment.
 
### tabs-main.ts
Initializes the tabs component.
 
### tabs.ts
Tabs component. Holds a collection of tabs and in its template will make use of angular router functionality and Bootstrap styles
```
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" *ngFor="let tab of tabs" routerLinkActive="active">
            <a role="tab" data-toggle="tab" routerLink="{{ tab.link }}">{{ tab.title }}</a>
        </li>
    </ul>
    <div class="tab-content">
        <router-outlet></router-outlet>
    </div>
```

**routerLinkActive**  will set the class `active` when the routerLink on that element becomes active
**routerLink**  uses the Tab configuration to set the route that the element will activate, for example, `/one` or `/mycomponent`
**router-outlet**  this is where Angular 2 will insert the component that will serve the activated route, according to app.routing.ts configuration  