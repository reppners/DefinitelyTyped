// Type definitions for angular-localForage 1.2.2
// Project: https://github.com/ocombe/angular-localForage
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module angular.localForage {

    interface ILocalForageProvider {

        //TODO
    }

    interface ILocalForageService {
        //TODO typing for driver
        setDriver(driver:any):void;
        driver():any;

        setItem(key:string, value:string):angular.IPromise<void>;
        setItem(keys:Array<string>, values:Array<string>):angular.IPromise<void>;

        getItem(key:string):angular.IPromise<string>;
        getItem(keys:Array<string>):angular.IPromise<Array<string>>;

        removeItem(key:string | Array<string>):angular.IPromise<void>;

        pull(key:string):angular.IPromise<string>;
        pull(keys:Array<string>):angular.IPromise<Array<string>>;

        clear():angular.IPromise<void>;

        key(n:number):angular.IPromise<string>;

        keys():angular.IPromise<string>;

        length():angular.IPromise<number>;

        iterate<T>(iteratorCallback:(value:string | number, key:string)=>T):angular.IPromise<T>;
    }
}
