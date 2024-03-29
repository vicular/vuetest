export declare const AddressList: import("../utils").WithInstall<import("vue").DefineComponent<{
    list: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:modelValue" | "add" | "edit" | "click-item" | "edit-disabled" | "select-disabled")[], "select" | "update:modelValue" | "add" | "edit" | "click-item" | "edit-disabled" | "select-disabled", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    list: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    modelValue: (NumberConstructor | StringConstructor)[];
    switchable: {
        type: BooleanConstructor;
        default: true;
    };
    disabledText: StringConstructor;
    disabledList: {
        type: import("vue").PropType<import("./AddressListItem").AddressListAddress[]>;
        default: () => never[];
    };
    addButtonText: StringConstructor;
    defaultTagText: StringConstructor;
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEdit?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    "onClick-item"?: ((...args: any[]) => any) | undefined;
    "onEdit-disabled"?: ((...args: any[]) => any) | undefined;
    "onSelect-disabled"?: ((...args: any[]) => any) | undefined;
}, {
    switchable: boolean;
    list: import("./AddressListItem").AddressListAddress[];
    disabledList: import("./AddressListItem").AddressListAddress[];
}>>;
export default AddressList;
export type { AddressListProps } from './AddressList';
export type { AddressListAddress } from './AddressListItem';
declare module 'vue' {
    interface GlobalComponents {
        VanAddressList: typeof AddressList;
    }
}
