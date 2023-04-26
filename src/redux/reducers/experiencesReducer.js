import { DELETE_USER_EXPERIENCE, GET_USER_EXPERIENCES, POST_USER_EXPERIENCE, PUT_USER_EXPERIENCE } from "../action";

const experiencesDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_EXPERIENCES:
      return action.payload;
    case POST_USER_EXPERIENCE:
      return [...state, action.payload];
    case PUT_USER_EXPERIENCE:
      return state.map((exp) => {
        if (exp._id !== action.id) {
          return exp;
        }
        return {
          ...action.payload
        };
      });
    case DELETE_USER_EXPERIENCE:
      return state.filter((exp) => exp._id !== action.payload);
    default:
      return state;
  }
};

export default experiencesDataReducer;
