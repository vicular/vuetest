import { DropdownMenuProps } from './DropdownMenu';
export declare const DropdownMenu: import("../utils").WithInstall<import("vue").DefineComponent<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./types").DropdownMenuDirection>;
        default: import("./types").DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    overlay: {
        type: BooleanConstructor;
        default: true;
    };
    zIndex: (NumberConstructor | StringConstructor)[];
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    direction: {
        type: import("vue").PropType<import("./types").DropdownMenuDirection>;
        default: import("./types").DropdownMenuDirection;
    };
    activeColor: StringConstructor;
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: true;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: true;
    };
}>>, {
    overlay: boolean;
    duration: string | number;
    closeOnClickOverlay: boolean;
    direction: import("./types").DropdownMenuDirection;
    closeOnClickOutside: boolean;
}>>;
export default DropdownMenu;
export type { DropdownMenuProps };
export type { DropdownMenuDirection } from './types';
declare module 'vue' {
    interface GlobalComponents {
        VanDropdownMenu: typeof DropdownMenu;
    }
}
