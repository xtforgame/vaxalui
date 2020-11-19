import { MouseEventHandler } from 'react';
export declare type SubscriptionContext = {
    email: string;
    setEmail: (email: string) => void;
    emailErrorMessage?: string;
    checked: boolean;
    setChecked: (checked: boolean) => void;
    checkErrorMessage?: string;
    successMessage?: string;
    errorMessage?: string;
    onSubmit: (e: MouseEventHandler) => void;
};
declare const _default: import("react").Context<SubscriptionContext>;
export default _default;
