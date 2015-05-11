/// <reference path='../angularjs/angular.d.ts' />
/// <reference path='angular-localForage.d.ts' />

export class TestController {
  constructor($localForage: angular.localForage.ILocalForageService) {
//TODO
  }
}

var app = angular.module('angular-localForage-tests', ['LocalForageModule']);
app.config(function (localStorageServiceProvider: angular.localForage.ILocalForageProvider) {

  //TODO
});

app.controller('TestController', TestController);
