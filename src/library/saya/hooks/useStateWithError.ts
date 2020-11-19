import { useState, Dispatch, SetStateAction } from 'react';

type ValueSetter<V> = (value : SetStateAction<V>, clearError?: boolean) => void;

export default <V, E = string>(v : V, e?: E | void, config?: any) : [V, ValueSetter<V>, E | void, Dispatch<SetStateAction<void | E>>] => {
  const [value, setValue] = useState<V>(v);
  const [error, setError] = useState<E | void>(e);

  const sv = (value : SetStateAction<V>, clearError: boolean = true) => {
    setValue(value);
    if (clearError) {
      setError();
    }
  };

  return [value, sv, error, setError];
};
