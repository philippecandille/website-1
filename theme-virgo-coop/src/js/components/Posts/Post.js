import React from 'react';
import PropTypes from 'prop-types';

const Post = ({
  ID,
  title,
  content,
}) => (
  <div className="virgo-post">
    <p>{ID}</p>
    <p>{title}</p>
    <p dangerouslySetInnerHTML={{__html: content}} />
  </div>
);

Post.propTypes = {
  ID: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Post;
