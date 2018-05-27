import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const Posts = ({
  posts,
}) => {
  return posts.map(post => <Post key={post.ID} {...post} />);
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    ID: PropTypes.number.isRequired,
  })).isRequired,
};

export default Posts;
