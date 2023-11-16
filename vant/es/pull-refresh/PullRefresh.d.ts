import { type ExtractPropTypes } from 'vue';
declare const pullRefreshProps: {
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
};
export declare type PullRefreshProps = ExtractPropTypes<typeof pullRefreshProps>;
declare const _default: import("vue").DefineComponent<{
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "refresh")[], "update:modelValue" | "change" | "refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    disabled: BooleanConstructor;
    modelValue: BooleanConstructor;
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    successText: StringConstructor;
    pullingText: StringConstructor;
    loosingText: StringConstructor;
    loadingText: StringConstructor;
    pullDistance: (NumberConstructor | StringConstructor)[];
    successDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    animationDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: boolean;
    animationDuration: string | number;
    headHeight: string | number;
    successDuration: string | number;
}>;
export default _default;
