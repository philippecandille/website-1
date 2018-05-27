import axios from 'axios';

import * as types from 'src/store/ducks/wp-api/types';
import * as actions from 'src/store/ducks/wp-api/actions';

/**
 * WordPress REST API middleware.
 */
const middleware = store => next => (action) => {
  switch (action.type) {
    /**
     * FETCH - retrieve SPA/homepage relevant posts.
     */
    case types.FETCH: {
      axios
        .get('wp-json/posts/1')
        .then(response => {
          store.dispatch(actions.contentFetched(response.data));
        })
        .catch(error => {
          console.error('Request failed', error);
        });
      break;
    }

    default:
  }

  next(action);
};

export default middleware;
