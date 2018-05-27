import * as types from './types';

export const fetchContent = () => ({
  type: types.FETCH,
});

export const contentFetched = data => ({
  type: types.FETCHED,
  data,
});
