import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(() => {
    return import(`../pages/${componentName}`).then(module => {
      return {
        ...module,
        default: module[componentName],
      };
    });
  });
};
