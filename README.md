# MyDreamApp

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

To use the project with angular-cli, install it:

    npm install -g angular-cli

Then install dependendencies with:

    npm install

# Backand 

Uses `angular2bknd-sdk`. See [angular2bknd-sdk](https://github.com/backand/angular2bknd-sdk) about required dependencies.

# App Structure

The app structure is the standard Angular JS 2 structure. The app code is the `src` folder. The app starts `AppModule` from `app.modulet.ts`, and does a bootstrap of `AppComponent` from `app.componenet.ts`. The app uses a Router, and constructs the routes in `app-routing.modules.ts`. 

AppComponent shows a navigation bar, and using `router-outlet` switches views. 

Layout of app is done using SASS.

Using angular-cli, we generate screens with:

    ng generate component my-new-component

Each screen forms a folder under `src` with four files:

* `ts` - typescript component
* `html` - html template
* `scss` - SASS for styling of template
* `spec.ts` - tests

## Components

### Login 

Sign in to Backand using username and password, or with anonymous token.

## Sign Up

1. Sign up to Backand 
2. Sign up using Facebook/Twitter/Google/GitHub

### CRUD 

CRUD operation on your model in Backand

Including:

Get items
Post items
Filter items

### Files 

Upload files to Backand storage





