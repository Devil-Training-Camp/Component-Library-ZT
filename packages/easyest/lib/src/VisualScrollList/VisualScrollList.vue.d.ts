export default _sfc_main;
declare namespace _sfc_main {
    namespace props {
        namespace listData {
            export const type: ArrayConstructor;
            function _default(): never[];
            export { _default as default };
        }
        namespace estimatedItemSize {
            const type_1: NumberConstructor;
            export { type_1 as type };
            const _default_1: number;
            export { _default_1 as default };
        }
        namespace cacheCount {
            const type_2: NumberConstructor;
            export { type_2 as type };
            const _default_2: number;
            export { _default_2 as default };
        }
    }
    function setup(__props: any, { expose: __expose }: {
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
        reactive: typeof reactive;
        ref: typeof ref;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        onUpdated: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        nextTick: typeof nextTick;
    };
    function setup(__props: any, { expose: __expose }: {
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
        reactive: typeof reactive;
        ref: typeof ref;
        onMounted: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        onUpdated: (hook: () => any, target?: import("vue").ComponentInternalInstance | null | undefined) => false | Function | undefined;
        nextTick: typeof nextTick;
    };
}
import { reactive } from "@vue/runtime-core";
import { ref } from "@vue/runtime-core";
import { nextTick } from "@vue/runtime-core";
