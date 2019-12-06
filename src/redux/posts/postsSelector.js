import { createSelector } from "reselect";

export const getPosts = state => state.posts.items;

export const getCurrentTag = state => state.posts.selectedTag;

// export const getPostsWithTag = state => {
//   const posts = getPosts(state);
//   const tag = getCurrentTag(state);

//   return posts.filter(post => post.tag === tag);
// };

export const getPostsWithTag = createSelector(
  [getPosts, getCurrentTag],
  (posts, tag) => posts.filter(post => post.tag === tag)
);

export const countTotalLikes = createSelector([getPosts], posts =>
  posts.reduce((acc, item) => acc + item.likes, 0)
);
