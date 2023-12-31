import { useMemo, useState } from 'react';

const useWatch = (
    target: any,
    keys: string[]
) => {
    const [, updatechangeid] = useState(0); // eslint-disabled-line
  
    // usememo to prevent unnecessary calls
    return useMemo(
        () => {
            const descriptor = keys.reduce((acc: any, key) => {
                const internalkey = `@@__${key}__`;
  
                acc[key] = {
                    enumerable: true,
                    configurable: true,
                    get() {
                        return target[internalkey];
                    },
                    set(value: string) {
                        if (target[internalkey] !== value) {
                            target[internalkey] = value;
                            updatechangeid(id => id + 1);  // <-- notify react about the change, 
                            // the value's not important 
                        }
                    }
                };
                return acc;
            }, {});
  
            return Object.defineProperties(target, descriptor);
        },
        [target, ...keys]
    );
};

export default useWatch;