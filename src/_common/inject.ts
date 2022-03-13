import { createContext, useContext } from "react";

type InjectData = Map<Function, Function>;

const injectDefault: InjectData = new Map();
const InjectContext = createContext(injectDefault);

type Injectable<T extends Function> = T & { originalHook: T };

const useInject = <T extends Function>(original: T): T => {
  const injections = useContext(InjectContext);
  if (injections.has(original)) {
    // This cast is type-safe, because `original` and `mock` were required to have the same type in `defineMock()`.
    // Type-safety not trivial to achieve with native TS: https://stackoverflow.com/a/51573704/177663
    return injections.get(original) as T;
  }
  return original;
};

export const injectableHook = <F extends Function>(hook: F): Injectable<F> => {
  // Define a wrapper for 'hook'
  // I tried doing this type-safely but failed -- it would break type arguments of useEnhancedTable<*>
  // (see https://stackoverflow.com/a/54946767/177663)
  const useWrapper = (function (this: any) {
    return useInject(hook).apply(this, arguments);
  } as unknown) as F;
  return Object.assign(useWrapper, { originalHook: hook });
};
