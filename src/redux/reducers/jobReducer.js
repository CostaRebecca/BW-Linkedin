import { JOB_BOOKMARK_ADD, JOB_BOOKMARK_REMOVE, JOB_SEARCH, JOB_SEARCH_KIND_UPDATE } from "../action/jobs";

const jobReducer = (state = { bookmarks: [], searchResults: [], searchKind: "search" }, action) => {
  switch (action.type) {
    case JOB_BOOKMARK_ADD:
      const bookMarkExits = state.bookmarks.find((bookmark) => bookmark._id === action.payload._id);
      if (bookMarkExits) {
        return {
          ...state
        };
      } else {
        return {
          ...state,
          bookmarks: [...state.bookmarks, action.payload]
        };
      }

    case JOB_BOOKMARK_REMOVE:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((job) => job._id !== action.payload._id)
      };
    case JOB_SEARCH_KIND_UPDATE:
      return {
        ...state,
        searchKind: action.payload
      };
    case JOB_SEARCH:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};

export default jobReducer;
