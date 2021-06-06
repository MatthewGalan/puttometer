import { selector } from "recoil";
import { historyAtom } from "../atoms/GameState";
import {
  graphDepthAtom,
  putterCountAtom,
  rollingAverageDepthAtom,
} from "../atoms/GameConfig";

export const graphSelector = selector({
  key: "graph",
  get: ({ get }) => {
    const history = get(historyAtom);
    const rollingAverageDepth = get(rollingAverageDepthAtom);
    const graphDepth = get(graphDepthAtom);
    const putterCount = get(putterCountAtom);

    const adjustedAvgDept = Math.ceil(rollingAverageDepth / putterCount);

    const graphData = [];

    for (
      let index = Math.max(0, history.length - graphDepth);
      index < history.length;
      index++
    ) {
      const start = Math.max(0, index - adjustedAvgDept + 1);
      const localHistory = history.slice(start, index + 1);

      const puttsMade = localHistory.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      const totalPutts = localHistory.length * putterCount;

      graphData.push(puttsMade / totalPutts);
    }

    return graphData;
  },
});
