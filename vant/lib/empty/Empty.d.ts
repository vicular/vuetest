import { type PropType, type ExtractPropTypes } from 'vue';
import { Numeric } from '../utils';
declare const emptyProps: {
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
};
export declare type EmptyProps = ExtractPropTypes<typeof emptyProps>;
declare const _default: import("vue").DefineComponent<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: PropType<Numeric | [Numeric, Numeric]>;
    description: StringConstructor;
}>>, {
    image: string;
}>;
export default _default;
