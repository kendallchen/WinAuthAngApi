// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //use below if you use IIS Express
  apiCustomer: 'https://localhost:44381/api/customer',
  apiAccount: 'https://localhost:44381/api/account'
  //use below if you have IIS setup for API
//   apiCustomer: 'https://localhost/api/customer',
//   apiAccount: 'https://localhost/api/account'
};



