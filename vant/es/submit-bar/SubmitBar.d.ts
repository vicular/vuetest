import { type PropType, type ExtractPropTypes } from 'vue';
import { ButtonType } from '../button';
export declare type SubmitBarTextAlign = 'left' | 'right';
declare const submitBarProps: {
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
};
export declare type SubmitBarProps = ExtractPropTypes<typeof submitBarProps>;
declare const _default: import("vue").DefineComponent<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "submit"[], "submit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    tip: StringConstructor;
    label: StringConstructor;
    price: NumberConstructor;
    tipIcon: StringConstructor;
    loading: BooleanConstructor;
    currency: {
        type: PropType<string>;
        default: string;
    };
    disabled: BooleanConstructor;
    textAlign: PropType<SubmitBarTextAlign>;
    buttonText: StringConstructor;
    buttonType: {
        type: PropType<ButtonType>;
        default: ButtonType;
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
    buttonType: ButtonType;
}>;
export default _default;
