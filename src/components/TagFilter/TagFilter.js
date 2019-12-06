import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { getCurrentTag } from "../../redux/posts/postsSelector";
import * as postsActions from "../../redux/posts/postsActions";

const options = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "javascript" },
  { label: "React.js", value: "react" }
];

const findOption = value => options.find(opt => opt.value === value);

const TagFilter = ({ currentTag = null, onChangeTag = () => null }) => (
  <div style={{ width: 200 }}>
    <Select
      options={options}
      value={findOption(currentTag)}
      onChange={onChangeTag}
    />
  </div>
);

const mapStateToProps = state => ({
  currentTag: getCurrentTag(state)
});

const mapDispatchToProps = dispatch => ({
  onChangeTag: tag => dispatch(postsActions.changeTag(tag.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagFilter);
