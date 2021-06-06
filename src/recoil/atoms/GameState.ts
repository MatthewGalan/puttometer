import { atom } from "recoil";
import { localStorageEffect } from "../effects/LocalStorage";

export const timeElapsedAtom = atom({
  key: "time-elapsed",
  default: 0,
  effects_UNSTABLE: [localStorageEffect("time-elapsed")],
});

export const historyAtom = atom<number[]>({
  key: "history",
  default: [],
  effects_UNSTABLE: [localStorageEffect("history")],
});
