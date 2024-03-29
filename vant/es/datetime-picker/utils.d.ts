import type { PropType } from 'vue';
import type { PickerInstance } from '../picker';
import type { DatetimePickerColumnType } from './types';
export declare const sharedProps: {
    title: StringConstructor;
    loading: BooleanConstructor;
    readonly: BooleanConstructor;
    allowHtml: BooleanConstructor;
    itemHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showToolbar: {
        type: BooleanConstructor;
        default: true;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleItemCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    cancelButtonText: StringConstructor;
    confirmButtonText: StringConstructor;
} & {
    filter: PropType<(type: string, values: string[]) => string[]>;
    columnsOrder: PropType<DatetimePickerColumnType[]>;
    formatter: {
        type: PropType<(type: string, value: string) => string>;
        default: (type: string, value: string) => string;
    };
};
export declare const pickerInheritKeys: ("title" | "readonly" | "loading" | "allowHtml" | "itemHeight" | "showToolbar" | "swipeDuration" | "visibleItemCount" | "cancelButtonText" | "confirmButtonText")[];
export declare function times<T>(n: number, iteratee: (index: number) => T): T[];
export declare function getTrueValue(value: string | undefined): number;
export declare const getMonthEndDay: (year: number, month: number) => number;
export declare const proxyPickerMethods: (picker: PickerInstance, callback: () => void) => PickerInstance;
