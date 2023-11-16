export declare const SubmitBar: import("../utils").WithInstall<import("vue").DefineComponent<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: import("vue").PropType<import("./SubmitBar").SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: import("vue").PropType<import("..").ButtonType>;
        default: import("..").ButtonType;
    };
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    placeholder: BooleanConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: import("vue").PropType<import("./SubmitBar").SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: import("vue").PropType<import("..").ButtonType>;
        default: import("..").ButtonType;
    };
    buttonColor: StringConstructor;
    suffixLabel: StringConstructor;
    placeholder: BooleanConstructor;
    decimalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    placeholder: boolean;
    safeAreaInsetBottom: boolean;
    loading: boolean;
    currency: string;
    decimalLength: string | number;
    buttonType: import("..").ButtonType;
}>>;
export default SubmitBar;
export type { SubmitBarProps, SubmitBarTextAlign } from './SubmitBar';
declare module 'vue' {
    interface GlobalComponents {
        VanSubmitBar: typeof SubmitBar;
    }
}
