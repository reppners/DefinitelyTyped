// Type definitions for st-line-chart
// Project: https://gitlab/Stellwerk/st-line-chart
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/reppners/DefinitelyTyped

/// <reference path='../angularjs/angular.d.ts' />

declare module St.LineChart {
    var Namespace: string;
    interface VerticalMargin {
        top?: number;
        bottom?: number;
    }
    interface Margin extends VerticalMargin {
        right?: number;
        left?: number;
    }
    interface AxisOptions {
        orientation?: string;
        tickCount?: number;
        innerTickSize?: number;
        outerTickSize?: number;
        tickFormat?: (n: number) => string;
    }
    interface TransitionOptions {
        duration?: number;
        ease?: string;
    }
    interface CommonOptions {
        start: Date;
        end: Date;
        minTimespan?: number;
        maxTimespan?: number;
        dataSourceThrottle?: number;
        margin?: Margin;
        zoomable?: boolean;
        transitions?: boolean;
        width?: number;
        xAccessor?: string;
        yAccessor?: string;
        xAxisOptions?: AxisOptions;
        anchorFocusInCenter?: boolean;
    }
    interface ChartOptions {
        id: string | number;
        grid?: boolean;
        area?: boolean;
        margin?: VerticalMargin;
        height?: number;
        interpolation?: string;
        transitionOptions?: TransitionOptions;
        yAxisOptions?: AxisOptions;
    }
    interface DataSourceDelegate {
        (chartId: string | number, start: Date, end: Date): angular.IPromise<Array<any>>;
    }
    interface RequestChartRedraw {
        (chartOptions?: ChartOptions, forceRedraw?: boolean): void;
    }
}
