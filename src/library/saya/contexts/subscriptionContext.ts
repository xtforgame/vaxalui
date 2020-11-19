import { createContext, MouseEventHandler } from 'react';

export type SubscriptionContext = {
  email: string;
  setEmail: (email : string) => void;
  emailErrorMessage?: string;

  checked: boolean;
  setChecked: (checked: boolean) => void;
  checkErrorMessage?: string;

  successMessage?: string;
  errorMessage?: string;
  onSubmit: (e: MouseEventHandler) => void;
};

export default createContext<SubscriptionContext>({
  email: '',
  setEmail: () => {},
  checked: false,
  setChecked: () => {},
  onSubmit: () => {},
});
