import { atom } from "recoil";
import { localStorageEffect } from "../effects/LocalStorage";

export enum ProgressMode {
  Sinks = "SINKS",
  Throws = "THROWS",
}

export const progressModeAtom = atom<ProgressMode>({
  key: "progress-mode",
  default: ProgressMode.Sinks,
  effects_UNSTABLE: [localStorageEffect("progress-mode")],
});

export const progressGoalAtom = atom<number>({
  key: "progress-goal",
  default: 100,
  effects_UNSTABLE: [localStorageEffect("progress-goal")],
});

export const putterCountAtom = atom<number>({
  key: "putter-count",
  default: 3,
  effects_UNSTABLE: [localStorageEffect("putter-count")],
});

export const rollingAverageDepthAtom = atom<number>({
  key: "rolling-average-depth",
  default: 30,
  effects_UNSTABLE: [localStorageEffect("rolling-average-depth")],
});

export const graphDepthAtom = atom<number>({
  key: "graph-depth",
  default: 30,
  effects_UNSTABLE: [localStorageEffect("graph-depth")],
});

export const upperBoundAtom = atom<number>({
  key: "upper-bound",
  default: 0.8,
  effects_UNSTABLE: [localStorageEffect("upper-bound")],
});

export const lowerBoundAtom = atom<number>({
  key: "lower-bound",
  default: 0.6,
  effects_UNSTABLE: [localStorageEffect("lower-bound")],
});
