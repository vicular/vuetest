export declare const Calendar: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./types").CalendarType>;
        default: import("./types").CalendarType;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: import("vue").PropType<import("..").PopupPosition>;
        default: import("..").PopupPosition;
    };
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: import("vue").PropType<(item: import("./types").CalendarDayItem) => import("./types").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: import("vue").PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:show" | "confirm" | "click-subtitle" | "unselect" | "month-show" | "over-range")[], "select" | "update:show" | "confirm" | "click-subtitle" | "unselect" | "month-show" | "over-range", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    type: {
        type: import("vue").PropType<import("./types").CalendarType>;
        default: import("./types").CalendarType;
    };
    title: StringConstructor;
    color: StringConstructor;
    round: {
        type: BooleanConstructor;
        default: true;
    };
    readonly: BooleanConstructor;
    poppable: {
        type: BooleanConstructor;
        default: true;
    };
    maxRange: {
        type: (NumberConstructor | StringConstructor)[];
        default: null;
    };
    position: {
        type: import("vue").PropType<import("..").PopupPosition>;
        default: import("..").PopupPosition;
    };
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    showMark: {
        type: BooleanConstructor;
        default: true;
    };
    showTitle: {
        type: BooleanConstructor;
        default: true;
    };
    formatter: import("vue").PropType<(item: import("./types").CalendarDayItem) => import("./types").CalendarDayItem>;
    rowHeight: (NumberConstructor | StringConstructor)[];
    confirmText: StringConstructor;
    rangePrompt: StringConstructor;
    lazyRender: {
        type: BooleanConstructor;
        default: true;
    };
    showConfirm: {
        type: BooleanConstructor;
        default: true;
    };
    defaultDate: import("vue").PropType<Date | Date[] | null>;
    allowSameDay: BooleanConstructor;
    showSubtitle: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnPopstate: {
        type: BooleanConstructor;
        default: true;
    };
    showRangePrompt: {
        type: BooleanConstructor;
        default: true;
    };
    confirmDisabledText: StringConstructor;
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetTop: BooleanConstructor;
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    minDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        validator: (val: unknown) => val is Date;
        default: () => Date;
    };
    firstDayOfWeek: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (val: number) => boolean;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:show"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    "onClick-subtitle"?: ((...args: any[]) => any) | undefined;
    onUnselect?: ((...args: any[]) => any) | undefined;
    "onMonth-show"?: ((...args: any[]) => any) | undefined;
    "onOver-range"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./types").CalendarType;
    position: import("..").PopupPosition;
    round: boolean;
    readonly: boolean;
    safeAreaInsetBottom: boolean;
    show: boolean;
    lazyRender: boolean;
    closeOnClickOverlay: boolean;
    closeOnPopstate: boolean;
    safeAreaInsetTop: boolean;
    minDate: Date;
    maxDate: Date;
    poppable: boolean;
    maxRange: string | number;
    showMark: boolean;
    showTitle: boolean;
    showConfirm: boolean;
    allowSameDay: boolean;
    showSubtitle: boolean;
    showRangePrompt: boolean;
    firstDayOfWeek: string | number;
}>>;
export default Calendar;
export type { CalendarProps } from './Calendar';
export type { CalendarType, CalendarDayItem, CalendarDayType, CalendarInstance, } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanCalendar: typeof Calendar;
    }
}
