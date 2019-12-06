import React, { Component } from "react";
import { connect } from "react-redux";
import Timer from "./Timer/TimerContainer";
import StepSelector from "./StepSelector/StepSelectorContainer";
import TaggFilter from "./TagFilter/TagFilter";
import PostList from "./PostList/PostListContainer";
import * as postsActions from "../redux/posts/postsActions";
import posts from "../info/posts.json";
import TotalLikes from "./TotalLikes/TotalLikes";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  paddingTop: 48
};

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts(posts);
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <TotalLikes />
        <TaggFilter />
        <PostList />
      </div>
    );
  }
}

const mDTP = dispatch => ({
  fetchPosts: posts => dispatch(postsActions.fetchPosts(posts))
});

// const mDTP = {
//   fetchPosts
// };

export default connect(null, mDTP)(App);
