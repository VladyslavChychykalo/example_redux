import React from "react";
import { connect } from "react-redux";
import { countTotalLikes } from "../../redux/posts/postsSelector";

const TotalLikes = ({ likes }) => <h1>Total likes: {likes}</h1>;

const mapStateToProps = state => ({
  likes: countTotalLikes(state)
});

export default connect(mapStateToProps)(TotalLikes);
