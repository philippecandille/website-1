import { connect } from 'react-redux';

import Posts from 'src/components/Posts';

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
});

const mapDispatchToProps = null;

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);

export default PostsContainer;
