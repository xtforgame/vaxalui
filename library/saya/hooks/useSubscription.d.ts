import { SubscriptionContext } from '../contexts/subscriptionContext';
export declare type HandleSubmit = (email: string) => Promise<any>;
declare const _default: (handleSubmit: HandleSubmit) => SubscriptionContext;
export default _default;
