import { Dispatch, SetStateAction } from 'react';
declare type ValueSetter<V> = (value: SetStateAction<V>, clearError?: boolean) => void;
declare const _default: <V, E = string>(v: V, e?: void | E | undefined, config?: any) => [V, ValueSetter<V>, void | E, Dispatch<SetStateAction<void | E>>];
export default _default;
