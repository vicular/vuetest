export declare const Card: import("../utils").WithInstall<import("vue").DefineComponent<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click-thumb"[], "click-thumb", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: StringConstructor;
    num: (NumberConstructor | StringConstructor)[];
    desc: StringConstructor;
    thumb: StringConstructor;
    title: StringConstructor;
    price: (NumberConstructor | StringConstructor)[];
    centered: BooleanConstructor;
    lazyLoad: BooleanConstructor;
    currency: {
        type: import("vue").PropType<string>;
        default: string;
    };
    thumbLink: StringConstructor;
    originPrice: (NumberConstructor | StringConstructor)[];
}>> & {
    "onClick-thumb"?: ((...args: any[]) => any) | undefined;
}, {
    lazyLoad: boolean;
    centered: boolean;
    currency: string;
}>>;
export default Card;
export type { CardProps } from './Card';
declare module 'vue' {
    interface GlobalComponents {
        VanCard: typeof Card;
    }
}
