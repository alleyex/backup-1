// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAgwGuzdarnbXx6Ajk2Y1QohOLPj94HkU4',
    authDomain: 'mercury-object.firebaseapp.com',
    databaseURL: 'https://mercury-object.firebaseio.com',
    projectId: 'mercury-object',
    storageBucket: 'mercury-object.appspot.com',
    messagingSenderId: '851571343543'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
