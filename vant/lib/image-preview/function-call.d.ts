import { ComponentInstance } from '../utils';
import type { App } from 'vue';
import type { ImagePreviewOptions } from './types';
declare const ImagePreview: {
    (options: string[] | ImagePreviewOptions, startPosition?: number): ComponentInstance | undefined;
    Component: import("../utils").WithInstall<import("vue").DefineComponent<{
        show: BooleanConstructor;
        loop: {
            type: BooleanConstructor;
            default: true;
        };
        images: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        minZoom: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        maxZoom: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        closeable: BooleanConstructor;
        showIndex: {
            type: BooleanConstructor;
            default: true;
        };
        className: import("vue").PropType<unknown>;
        closeIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        transition: StringConstructor;
        beforeClose: import("vue").PropType<import("../utils").Interceptor>;
        overlayClass: import("vue").PropType<unknown>;
        overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
        swipeDuration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        startPosition: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        showIndicators: BooleanConstructor;
        closeOnPopstate: {
            type: BooleanConstructor;
            default: true;
        };
        closeIconPosition: {
            type: import("vue").PropType<import("..").PopupCloseIconPosition>;
            default: import("..").PopupCloseIconPosition;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "closed" | "update:show" | "scale")[], "change" | "close" | "closed" | "update:show" | "scale", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        show: BooleanConstructor;
        loop: {
            type: BooleanConstructor;
            default: true;
        };
        images: {
            type: import("vue").PropType<string[]>;
            default: () => never[];
        };
        minZoom: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        maxZoom: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        overlay: {
            type: BooleanConstructor;
            default: true;
        };
        closeable: BooleanConstructor;
        showIndex: {
            type: BooleanConstructor;
            default: true;
        };
        className: import("vue").PropType<unknown>;
        closeIcon: {
            type: import("vue").PropType<string>;
            default: string;
        };
        transition: StringConstructor;
        beforeClose: import("vue").PropType<import("../utils").Interceptor>;
        overlayClass: import("vue").PropType<unknown>;
        overlayStyle: import("vue").PropType<import("vue").CSSProperties>;
        swipeDuration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        startPosition: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        showIndicators: BooleanConstructor;
        closeOnPopstate: {
            type: BooleanConstructor;
            default: true;
        };
        closeIconPosition: {
            type: import("vue").PropType<import("..").PopupCloseIconPosition>;
            default: import("..").PopupCloseIconPosition;
        };
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
        "onUpdate:show"?: ((...args: any[]) => any) | undefined;
        onScale?: ((...args: any[]) => any) | undefined;
    }, {
        loop: boolean;
        overlay: boolean;
        show: boolean;
        closeIcon: string;
        closeable: boolean;
        closeOnPopstate: boolean;
        closeIconPosition: import("..").PopupCloseIconPosition;
        swipeDuration: string | number;
        showIndicators: boolean;
        startPosition: string | number;
        minZoom: string | number;
        maxZoom: string | number;
        images: string[];
        showIndex: boolean;
    }>>;
    install(app: App): void;
};
export { ImagePreview };
