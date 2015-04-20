// Type definitions for JSData v1.8.0
// Project: https://github.com/js-data/js-data
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////
// js-data module (js-data.js)
///////////////////////////////////////////////////////////////////////////////

// defining what exists in JSData and how it looks
declare module JSData {

    //TODO this is going to change in 2.0 where the interface implementation will become injectable/configurable
    interface JSDataPromise<R> {
        then<U>(onFulfilled?:(value:R) => U | JSDataPromise<U>, onRejected?:(error:any) => U | JSDataPromise<U>): JSDataPromise<U>;
        catch<U>(onRejected?:(error:any) => U | JSDataPromise<U>): JSDataPromise<U>;
        finally<U>(finallyCb?:() => U):JSDataPromise<U>;
    }

    interface DS {

        new (config?:DSConfiguration):DS;

        // rather undocumented
        errors:DSErrors;

        // those are objects containing the defined resources and adapters
        definitions:any;
        adapters:any;

        defaults:DSConfiguration;

        // async
        create<T>(resourceName:string, attrs:Object, options?:DSConfiguration):JSDataPromise<T>;
        destroy(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        destroyAll(resourceName:string, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        find<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        findAll<T>(resourceName:string, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
        loadRelations<T>(resourceName:string, idOrInstance:string | number | Object, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        update<T>(resourceName:string, id:string | number, attrs:Object, options?:DSSaveConfiguration):JSDataPromise<T>;
        updateAll<T>(resourceName:string, attrs:Object, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
        reap(resourceName:string, options?:DSConfiguration):JSDataPromise<any>;
        refresh<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        save<T>(resourceName:string, id:string | number, options?:DSSaveConfiguration):JSDataPromise<T>;

        // sync
        changeHistory(resourceName:string, id?:string | number):Array<Object>;
        changes(resourceName:string, id:string | number):Object;
        compute(resourceName:string, idOrInstance:number | string | Object):void;
        createInstance<TInject, TResource>(resourceName:string, attrs?:TInject, options?:DSAdapterOperationConfiguration):TResource;
        // for defining resources with custom actions
        defineResource<T extends DSResourceDefinition<any>>(config:DSResourceDefinitionConfiguration):T;
        defineResource<T>(resourceNameOrDefinition:string | DSResourceDefinitionConfiguration):DSResourceDefinition<T>;
        digest():void;
        eject<T>(resourceName:string, id:string | number, options?:DSConfiguration):T;
        ejectAll<T>(resourceName:string, params:DSFilterParams, options?:DSConfiguration):Array<T>;
        filter<T>(resourceName:string, params:DSFilterParams, options?:DSConfiguration):Array<T>;
        get<T>(resourceName:string, id:string | number, options?:DSConfiguration):T;
        getAll<T>(resourceName:string, ids?:Array<string | number>):Array<T>;
        hasChanges(resourceName:string, id:string | number):boolean;
        inject<TInject, TResource>(resourceName:string, attrs:TInject, options?:DSConfiguration):TResource;
        inject<TInject, TResource>(resourceName:string, items:Array<TInject>, options?:DSConfiguration):Array<TResource>;
        is(resourceName:string, object:Object):boolean;
        lastModified(resourceName:string, id?:string | number):number; // timestamp
        lastSaved(resourceName:string, id?:string | number):number; // timestamp
        link<T>(resourceName:string, id:string | number, relations?:Array<string>):T;
        linkAll<T>(resourceName:string, params:DSFilterParams, relations?:Array<string>):T;
        linkInverse<T>(resourceName:string, id:string | number, relations?:Array<string>):T;
        previous<T>(resourceName:string, id:string | number):T;
        unlinkInverse<T>(resourceName:string, id:string | number, relations?:Array<string>):T;
        registerAdapter(adapterId:string, adapter:IDSAdapter, options?:{default: boolean}):void;
    }

    interface DSConfiguration extends IDSResourceLifecycleEventHandlers {
        actions?: Object;
        allowSimpleWhere?: boolean;
        basePath?: string;
        bypassCache?: boolean;
        cacheResponse?: boolean;
        defaultAdapter?: string;
        defaultFilter?: (collection:Array<any>, resourceName:string, params:DSFilterParams, options:DSConfiguration)=>Array<any>;
        eagerEject?: boolean;
        // TODO enable when eagerInject in DS#create is implemented
        //eagerInject?: boolean;
        endpoint?: string;
        error?: boolean | ((message?:any, ...optionalParams:any[])=> void);
        fallbackAdapters?: Array<string>;
        findAllFallbackAdapters?: Array<string>;
        findAllStrategy?: string;
        findBelongsTo?: boolean;
        findFallbackAdapters?: Array<string>;
        findHasOne?: boolean;
        findHasMany?: boolean;
        findInverseLinks?: boolean;
        findStrategy?: string
        findStrictCache?: boolean;
        idAttribute?: string;
        ignoredChanges?: Array<RegExp | string>;
        ignoreMissing?: boolean;
        keepChangeHistory?: boolean;
        loadFromServer?: boolean;
        log?: boolean | ((message?:any, ...optionalParams:any[])=> void);
        maxAge?: number;
        notify?: boolean;
        reapAction?: string;
        reapInterval?: number;
        resetHistoryOnInject?: boolean;
        strategy?: string;
        upsert?: boolean;
        useClass?: boolean;
        useFilter?: boolean;
    }

    interface DSAdapterOperationConfiguration extends DSConfiguration {
        adapter?: string
    }

    interface DSSaveConfiguration extends DSAdapterOperationConfiguration {
        changesOnly?: boolean;
    }

    interface DSResourceDefinitionConfiguration extends DSConfiguration {
        name: string;
        computed?: any;
        methods?: any;
        relations?: {
            hasMany?: Object;
            hasOne?: Object;
            belongsTo?: Object;
        };
    }

    //TODO type support for update/inject with generics useful?
    interface DSResourceDefinition<T> extends DSResourceDefinitionConfiguration {

        //async
        create<TInject>(attrs:TInject, options?:DSConfiguration):JSDataPromise<T>;
        destroy(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        destroyAll(params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        find(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        findAll(params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
        loadRelations(idOrInstance:string | number | Object, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        update(id:string | number, attrs:Object, options?:DSSaveConfiguration):JSDataPromise<T>;
        updateAll(attrs:Object, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
        reap(options?:DSConfiguration):JSDataPromise<any>;
        refresh(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        save(id:string | number, options?:DSSaveConfiguration):JSDataPromise<T>;

        // sync
        changeHistory(id?:string | number):Array<Object>;
        changes(id:string | number):Object;
        compute(idOrInstance:number | string | Object):void;
        createInstance<TInject>(attrs?:TInject, options?:DSAdapterOperationConfiguration):T;
        digest():void;
        eject(id:string | number, options?:DSConfiguration):T;
        ejectAll(params:DSFilterParams, options?:DSConfiguration):Array<T>;
        filter(params:DSFilterParams, options?:DSConfiguration):Array<T>;
        get(id:string | number, options?:DSConfiguration):T;
        getAll(ids?:Array<string | number>):Array<T>;
        hasChanges(id:string | number):boolean;
        inject<TInject>(attrs:TInject, options?:DSConfiguration):T;
        inject<TInject>(items:Array<TInject>, options?:DSConfiguration):Array<T>;
        is(object:Object): boolean;
        lastModified(id?:string | number):number; // timestamp
        lastSaved(id?:string | number):number; // timestamp
        link(id:string | number, relations?:Array<string>):T;
        linkAll(params:DSFilterParams, relations?:Array<string>):T;
        linkInverse(id:string | number, relations?:Array<string>):T;
        previous(id:string | number):T;
        unlinkInverse(id:string | number, relations?:Array<string>):T;
    }

    //TODO how can we add this methods to generic return types?
    export interface DSInstanceShorthands<T> {
        DSCompute():void;
        DSRefresh(options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        DSSave(options?:DSSaveConfiguration):JSDataPromise<T>;
        DSUpdate(options?:DSSaveConfiguration):JSDataPromise<T>;
        DSDestroy(options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        DSCreate(options?:DSConfiguration):JSDataPromise<T>;
        DSLoadRelations(relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        DSChangeHistory():Array<Object>;
        DSChanges():Object;
        DSHasChanges():boolean;
        DSLastModified():number; // timestamp
        DSLastSaved():number; // timestamp
        DSLink(relations?:Array<string>):T;
        DSLinkInverse(relations?:Array<string>):T;
        DSPrevious():T;
        DSUnlinkInverse(relations?:Array<string>):T;
    }

    interface DSFilterParams {
        where?: Object;
        limit?: number;
        skip?: number;
        offset?: number;
        orderBy?: string | Array<string> | Array<Array<string>>;
        sort?: string | Array<string> | Array<Array<string>>;
    }

    interface IDSResourceLifecycleValidateEventHandlers {
        beforeValidate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        validate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterValidate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleCreateEventHandlers {
        beforeCreate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterCreate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleCreateInstanceEventHandlers {
        beforeCreateInstance?: (resourceName:string, data:any)=>void;
        afterCreateInstance?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleUpdateEventHandlers {
        beforeUpdate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterUpdate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleDestroyEventHandlers {
        beforeDestroy?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterDestroy?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleInjectEventHandlers {
        beforeInject?: (resourceName:string, data:any)=>void;
        afterInject?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleEjectEventHandlers {
        beforeEject?: (resourceName:string, data:any)=>void;
        afterEject?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleReapEventHandlers {
        beforeReap?: (resourceName:string, data:any)=>void;
        afterReap?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleEventHandlers extends IDSResourceLifecycleCreateEventHandlers,
        IDSResourceLifecycleCreateInstanceEventHandlers,
        IDSResourceLifecycleValidateEventHandlers,
        IDSResourceLifecycleUpdateEventHandlers,
        IDSResourceLifecycleDestroyEventHandlers,
        IDSResourceLifecycleInjectEventHandlers,
        IDSResourceLifecycleEjectEventHandlers,
        IDSResourceLifecycleReapEventHandlers {
    }

    // errors
    interface DSErrors {
        // types
        IllegalArgumentError:DSError;
        IA:DSError;
        RuntimeError:DSError;
        R:DSError;
        NonexistentResourceError:DSError;
        NER:DSError;
    }

    interface DSError extends Error {
        new (message?:string):DSError;
        message: string;
        type: string;
    }

    // DSAdapter interface
    interface IDSAdapter {
        create<T>(config:DSResourceDefinition<T>, attrs:Object, options?:DSConfiguration):JSDataPromise<T>;
        destroy<T>(config:DSResourceDefinition<T>, id:string | number, options?:DSConfiguration):JSDataPromise<any>;
        destroyAll<T>(config:DSResourceDefinition<T>, params:DSFilterParams, options?:DSConfiguration):JSDataPromise<any>;
        find<T>(config:DSResourceDefinition<T>, id:string | number, options?:DSConfiguration):JSDataPromise<T>;
        findAll<T>(config:DSResourceDefinition<T>, params?:DSFilterParams, options?:DSConfiguration):JSDataPromise<T>;
        update<T>(config:DSResourceDefinition<T>, id:string | number, attrs:Object, options?:DSConfiguration):JSDataPromise<T>;
        updateAll<T>(config:DSResourceDefinition<T>, attrs:Object, params?:DSFilterParams, options?:DSConfiguration):JSDataPromise<T>;
    }
}

// declaring the existing global js object
declare
var JSData:{
    DS: JSData.DS;
    DSErrors: JSData.DSErrors;
};

//Support node require
declare module 'js-data' {

    export = JSData;
}