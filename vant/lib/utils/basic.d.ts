import type { ComponentPublicInstance } from 'vue';
export declare function noop(): void;
export declare const extend: {
    <T extends {}, U>(target: T, source: U): T & U;
    <T_1 extends {}, U_1, V>(target: T_1, source1: U_1, source2: V): T_1 & U_1 & V;
    <T_2 extends {}, U_2, V_1, W>(target: T_2, source1: U_2, source2: V_1, source3: W): T_2 & U_2 & V_1 & W;
    (target: object, ...sources: any[]): any;
};
export declare const inBrowser: boolean;
export declare type Numeric = number | string;
export declare type ComponentInstance = ComponentPublicInstance<{}, any>;
export declare function get(object: any, path: string): any;
export declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare function pick<T, U extends keyof T>(obj: T, keys: ReadonlyArray<U>, ignoreUndefined?: boolean): Writeable<Pick<T, U>>;
export declare const toArray: <T>(item: T | T[]) => T[];
