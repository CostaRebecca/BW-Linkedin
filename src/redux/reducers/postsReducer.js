import { DELETE_USER_POST, GET_USER_POSTS, POST_USER_POST, PUT_USER_POST } from "../action/posts";

const postsDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return action.payload;
    case POST_USER_POST:
      return [action.payload, ...state];
    case PUT_USER_POST:
      return state.map((post) => {
        if (post._id !== action.id) {
          return post;
        }
        return {
          ...action.payload
        };
      });
    case DELETE_USER_POST:
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

export default postsDataReducer;
