export declare const Switch: import("../utils").WithInstall<import("vue").DefineComponent<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: (NumberConstructor | StringConstructor)[];
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    modelValue: import("vue").PropType<unknown>;
    activeColor: StringConstructor;
    inactiveColor: StringConstructor;
    activeValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
    inactiveValue: {
        type: import("vue").PropType<unknown>;
        default: unknown;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    loading: boolean;
    activeValue: unknown;
    inactiveValue: unknown;
}>>;
export default Switch;
export type { SwitchProps } from './Switch';
declare module 'vue' {
    interface GlobalComponents {
        VanSwitch: typeof Switch;
    }
}
