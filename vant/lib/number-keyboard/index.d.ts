export declare const NumberKeyboard: import("../utils").WithInstall<import("vue").DefineComponent<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: import("./NumberKeyboard").NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "blur" | "update:modelValue" | "close" | "hide" | "show" | "delete")[], "input" | "blur" | "update:modelValue" | "close" | "hide" | "show" | "delete", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    show: BooleanConstructor;
    title: StringConstructor;
    theme: {
        type: import("vue").PropType<import("./NumberKeyboard").NumberKeyboardTheme>;
        default: import("./NumberKeyboard").NumberKeyboardTheme;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    teleport: import("vue").PropType<string | import("vue").RendererElement | null | undefined>;
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    transition: {
        type: BooleanConstructor;
        default: true;
    };
    blurOnClose: {
        type: BooleanConstructor;
        default: true;
    };
    showDeleteKey: {
        type: BooleanConstructor;
        default: true;
    };
    randomKeyOrder: BooleanConstructor;
    closeButtonText: StringConstructor;
    deleteButtonText: StringConstructor;
    closeButtonLoading: BooleanConstructor;
    hideOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: true;
    };
    extraKey: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
    onHide?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    maxlength: string | number;
    modelValue: string;
    safeAreaInsetBottom: boolean;
    show: boolean;
    transition: boolean;
    theme: import("./NumberKeyboard").NumberKeyboardTheme;
    blurOnClose: boolean;
    showDeleteKey: boolean;
    randomKeyOrder: boolean;
    closeButtonLoading: boolean;
    hideOnClickOutside: boolean;
    extraKey: string | string[];
}>>;
export default NumberKeyboard;
export type { NumberKeyboardProps, NumberKeyboardTheme, } from './NumberKeyboard';
declare module 'vue' {
    interface GlobalComponents {
        VanNumberKeyboard: typeof NumberKeyboard;
    }
}
