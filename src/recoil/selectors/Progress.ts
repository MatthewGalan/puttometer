import { selector } from "recoil";
import {
  ProgressMode,
  progressModeAtom,
  putterCountAtom,
} from "../atoms/GameConfig";
import { historyAtom } from "../atoms/GameState";

export const progressSelector = selector({
  key: "progress",
  get: ({ get }) => {
    const progressMode = get(progressModeAtom);
    const history = get(historyAtom);
    const putterCount = get(putterCountAtom);

    switch (progressMode) {
      case ProgressMode.Sinks:
        return history.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
      case ProgressMode.Throws:
        return history.length * putterCount;
    }
  },
});
