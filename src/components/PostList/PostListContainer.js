import { connect } from "react-redux";
import { compose } from "redux";
import withRenderLog from "../hoc/withRenderLog";
import PostList from "./PostList";
import * as postsSelector from "../../redux/posts/postsSelector";
import { deletePost } from "../../redux/posts/postsActions";

const mapStateToProps = state => ({
  items: postsSelector.getPostsWithTag(state)
});

const mapDispatchToProps = {
  deletePost
};

// export default connect(mapStateToProps, mapDispatchToProps)(PostList);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRenderLog
)(PostList);
