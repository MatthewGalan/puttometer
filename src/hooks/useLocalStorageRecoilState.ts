import { RecoilState, SetterOrUpdater, useRecoilState } from "recoil";
import { useEffect, useMemo, useState } from "react";

export default function useLocalStorageRecoilState<T>(
  atom: RecoilState<T>
): [T, SetterOrUpdater<T>] {
  const [value, setValue] = useRecoilState<T>(atom);
  const [loadedFromCache, setLoadedFromCache] = useState(false);

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(atom.key) ?? "null");
    if (storedValue) {
      setValue(storedValue);
    }
    setLoadedFromCache(true);
  }, [atom.key, setValue]);

  useEffect(() => {
    if (!loadedFromCache) {
      return;
    }

    localStorage.setItem(atom.key, JSON.stringify(value));
  }, [atom.key, value, loadedFromCache]);

  return useMemo(() => [value, setValue], [value, setValue]);
}
