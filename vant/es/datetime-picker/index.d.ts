import { DatetimePickerProps } from './DatetimePicker';
export declare const DatetimePicker: import("../utils").WithInstall<import("vue").DefineComponent<any, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any>, {} | {
    [x: string]: any;
}>>;
export default DatetimePicker;
export type { DatetimePickerProps };
export type { DatetimePickerType, DatetimePickerInstance } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanDatetimePicker: typeof DatetimePicker;
    }
}
