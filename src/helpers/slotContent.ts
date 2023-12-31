import { Comment, Text, type Slot, type VNode, Fragment } from 'vue';

function asArray<T>(arg: T | T[] | null) {
    if (Array.isArray(arg)) {
        return arg;
    } else if (arg !== null) {
        return [arg];
    } else {
        return [];
    }
}

function isVNodeEmpty(vnode: VNode | VNode[] | undefined | null) {
    return (
        !vnode ||
        asArray(vnode).every(
            (vnode) =>
                vnode.type === Comment ||
                (vnode.type === Text && !vnode.children?.length) ||
                (vnode.type === Fragment && !vnode.children?.length),
        )
    );
}

function isSlotEmpty(slot: Slot | undefined | null, props: any = {}) {
    return isVNodeEmpty(slot?.(props));
}

export function hasSlotContent(slot: Slot | undefined | null, props: any = {}) {
    return !isSlotEmpty(slot, props);
}
