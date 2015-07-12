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
        tickPadding?: number;
        tickFormat?: (n: number) => string;
        unit?: string;
        decimals?: number;
        label?: string;
    }
    interface ITransitionOptions {
        duration?: number;
        ease?: string;
    }
    interface ICommonOptions {
        start?: Date;
        end?: Date;
        timespan?: number;
        minTimespan?: number;
        maxTimespan?: number;
        dataSourceThrottle?: number;
        margin?: IMargin;
        zoomable?: boolean;
        transitions?: boolean;
        minWidth?: number;
        width?: number;
        xAccessor?: string;
        yAccessor?: string;
        xAxisOptions?: IAxisOptions;
        anchorFocusInCenter?: boolean;
        serverTimeOffset?: number;
    }
    interface ITitleOptions {
        center?: boolean;
        offset?: {
            x?: number;
            y?: number;
        };
    }
    interface IChartOptions<TMeta> {
        id: string | number;
        meta?: TMeta;
        title?: string;
        titleOptions?: ITitleOptions;
        grid?: boolean;
        area?: boolean;
        margin?: IVerticalMargin;
        height?: number;
        interpolation_analog?: string;
        interpolation_digital?: string;
        transitionOptions?: ITransitionOptions;
        yAxisOptions?: IAxisOptions;
        xAxisLabel?: string;
        focusDotSize?: number;
        missingDataPlaceholderText?: string;
        yScaleTopMargin?: number;
    }
    interface IDataSourceDelegate<T, TMeta> {
        (chartOptions: IChartOptions<TMeta>, start: Date, end: Date): angular.IPromise<Array<T>>;
    }
    interface IRequestRedrawOptions {
        redrawChartOptions?: IChartOptions<any>;
        forceDataRefetch?: boolean;
        redrawXAxis?: boolean;
    }
    interface IRequestChartRedraw {
        (requestRedrawOptions: IRequestRedrawOptions): void;
    }
    interface IFocusData<T> {
        date: Date;
        chartFocusData: Array<{
            id: number | string;
            data?: T;
        }>;
    }
    class InterpolationMode {
        static LINEAR: string;
        static LINEARCLOSED: string;
        static STEP: string;
        static STEPBEFORE: string;
        static STEPAFTER: string;
        static BASIS: string;
        static BASISOPEN: string;
        static BASISCLOSED: string;
        static BUNDLE: string;
        static CARDINAL: string;
        static CARDINALOPEN: string;
        static CARDINALCLOSED: string;
        static MONOTONE: string;
    }
    class EaseType {
        static LINEAR: string;
        static POLY: string;
        static QUAD: string;
        static CUBIC: string;
        static SIN: string;
        static EXP: string;
        static CIRCLE: string;
        static ELASTIC: string;
        static BACK: string;
        static BOUNCE: string;
        static LINEAR_IN: string;
        static POLY_IN: string;
        static QUAD_IN: string;
        static CUBIC_IN: string;
        static SIN_IN: string;
        static EXP_IN: string;
        static CIRCLE_IN: string;
        static ELASTIC_IN: string;
        static BACK_IN: string;
        static BOUNCE_IN: string;
        static LINEAR_OUT: string;
        static POLY_OUT: string;
        static QUAD_OUT: string;
        static CUBIC_OUT: string;
        static SIN_OUT: string;
        static EXP_OUT: string;
        static CIRCLE_OUT: string;
        static ELASTIC_OUT: string;
        static BACK_OUT: string;
        static BOUNCE_OUT: string;
        static LINEAR_IN_OUT: string;
        static POLY_IN_OUT: string;
        static QUAD_IN_OUT: string;
        static CUBIC_IN_OUT: string;
        static SIN_IN_OUT: string;
        static EXP_IN_OUT: string;
        static CIRCLE_IN_OUT: string;
        static ELASTIC_IN_OUT: string;
        static BACK_IN_OUT: string;
        static BOUNCE_IN_OUT: string;
        static LINEAR_OUT_IN: string;
        static POLY_OUT_IN: string;
        static QUAD_OUT_IN: string;
        static CUBIC_OUT_IN: string;
        static SIN_OUT_IN: string;
        static EXP_OUT_IN: string;
        static CIRCLE_OUT_IN: string;
        static ELASTIC_OUT_IN: string;
        static BACK_OUT_IN: string;
        static BOUNCE_OUT_IN: string;
    }
}
