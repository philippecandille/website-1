import * as types from 'src/store/ducks/wp-api/types';

const initialState = [];

const reducer = (posts = initialState, action) => {
  switch (action.type) {
    case types.FETCHED: {
      return [
        ...posts,
        action.data,
      ];
    }

    default:
      return posts;
  }
}

export default reducer;
