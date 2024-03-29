import { type PropType, type ExtractPropTypes } from 'vue';
import type { AreaList } from './types';
declare const areaProps: {
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
    value: StringConstructor;
    columnsNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    columnsPlaceholder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    areaList: {
        type: PropType<AreaList>;
        default: () => {};
    };
    isOverseaCode: {
        type: PropType<(code: string) => boolean>;
        default: (code: string) => boolean;
    };
};
export declare type AreaProps = ExtractPropTypes<typeof areaProps>;
declare const _default: import("vue").DefineComponent<{
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
    value: StringConstructor;
    columnsNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    columnsPlaceholder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    areaList: {
        type: PropType<AreaList>;
        default: () => {};
    };
    isOverseaCode: {
        type: PropType<(code: string) => boolean>;
        default: (code: string) => boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "cancel" | "confirm")[], "change" | "cancel" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    value: StringConstructor;
    columnsNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    columnsPlaceholder: {
        type: PropType<string[]>;
        default: () => never[];
    };
    areaList: {
        type: PropType<AreaList>;
        default: () => {};
    };
    isOverseaCode: {
        type: PropType<(code: string) => boolean>;
        default: (code: string) => boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    loading: boolean;
    allowHtml: boolean;
    itemHeight: string | number;
    showToolbar: boolean;
    swipeDuration: string | number;
    visibleItemCount: string | number;
    columnsNum: string | number;
    columnsPlaceholder: string[];
    areaList: AreaList;
    isOverseaCode: (code: string) => boolean;
}>;
export default _default;
