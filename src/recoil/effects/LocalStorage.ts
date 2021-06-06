import { DefaultValue } from "recoil";

export const localStorageEffect =
  (key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (value: any) => void;
    onSet: (effect: (newValue: any) => void) => void;
  }) => {
    const savedValue = JSON.parse(localStorage.getItem(key) ?? "null");

    if (savedValue !== null) {
      setSelf(savedValue);
    }

    onSet((newValue: any) => {
      if (newValue instanceof DefaultValue) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
