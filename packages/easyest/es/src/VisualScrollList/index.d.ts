import type { Plugin } from 'vue';
declare type SFCWithInstall<T> = T & Plugin;
export declare const VisualScrollList: SFCWithInstall<{
    props: {
        listData: {
            type: ArrayConstructor;
            default: () => never[];
        };
        estimatedItemSize: {
            type: NumberConstructor;
            default: number;
        };
        cacheCount: {
            type: NumberConstructor;
            default: number;
        };
    };
    setup(__props: any, { expose: __expose }: {
        expose: any;
    }): {
        content: import("vue").Ref<null>;
        listContainer: import("vue").Ref<null>;
        listContent: import("vue").Ref<null>;
        items: import("vue").Ref<null>;
        fixingScrollTop: boolean;
        lastScrollTop: number;
        isPositive: boolean;
        props: any;
        state: {
            screenHeight: number;
            start: number;
            allData: never[];
            startOffset: number;
            pillarDomHeight: number;
            contentListOffset: number;
        };
        positionDataArr: any[];
        initMergeData: () => void;
        scrollerContainerRefHeight: import("vue").ComputedRef<any>;
        end: import("vue").ComputedRef<number>;
        styleTranslate: import("vue").ComputedRef<string>;
        renderData: import("vue").ComputedRef<never[]>;
        onScroll: (event: any) => void;
        findStartByBinarySearch: (_positionDataArr: any, scrollTop: any) => number | undefined;
        fixScrollTop: () => void;
        updateHeightAndPos: () => void;
        computed: typeof import("@vue/reactivity").computed;
        reactive: typeof import("vue").reactive;
        ref: typeof import("vue").ref;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        onUpdated: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        nextTick: typeof import("vue").nextTick;
    };
}>;
export default VisualScrollList;
