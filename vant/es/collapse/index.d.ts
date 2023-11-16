export declare const Collapse: import("../utils").WithInstall<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    border: {
        type: BooleanConstructor;
        default: true;
    };
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<import("../utils").Numeric | import("../utils").Numeric[]>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    border: boolean;
    modelValue: import("../utils").Numeric | import("../utils").Numeric[];
    accordion: boolean;
}>>;
export default Collapse;
export type { CollapseProps, CollapseInstance, CollapseToggleAllOptions, } from './Collapse';
declare module 'vue' {
    interface GlobalComponents {
        VanCollapse: typeof Collapse;
    }
}
