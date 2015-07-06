// Type definitions for st-line-chart
// Project: https://gitlab/Stellwerk/st-line-chart
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/reppners/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare module St.LineChart {
    var Namespace: string;
    interface IVerticalMargin {
        top?: number;
        bottom?: number;
    }
    interface IMargin extends IVerticalMargin {
        right?: number;
        left?: number;
    }
    interface IAxisOptions {
        orientation?: string;
        tickCount?: number;
        innerTickSize?: number;
        outerTickSize?: number;
        tickFormat?: (n: number) => string;
    }
    interface ITransitionOptions {
        duration?: number;
        ease?: string;
    }
    interface ICommonOptions {
        start: Date;
        end: Date;
        minTimespan?: number;
        maxTimespan?: number;
        dataSourceThrottle?: number;
        margin?: IMargin;
        zoomable?: boolean;
        transitions?: boolean;
        width?: number;
        xAccessor?: string;
        yAccessor?: string;
        xAxisOptions?: IAxisOptions;
        anchorFocusInCenter?: boolean;
    }
    interface IChartOptions {
        id: string | number;
        grid?: boolean;
        area?: boolean;
        margin?: IVerticalMargin;
        height?: number;
        interpolation?: string;
        transitionOptions?: ITransitionOptions;
        yAxisOptions?: IAxisOptions;
    }
    interface IDataSourceDelegate<T> {
        (chartId: string | number, start: Date, end: Date): angular.IPromise<Array<T>>;
    }
    interface IRequestChartRedraw {
        (chartOptions?: IChartOptions, forceRedraw?: boolean): void;
    }
    interface IFocusData<T> {
        date: Date;
        data: {
            [chartId: string]: T;
        };
    }
}

