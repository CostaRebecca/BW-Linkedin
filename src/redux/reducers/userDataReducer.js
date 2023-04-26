import { ADD_USER_DATA } from "../action";

const userDataReducer = (state = null, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default userDataReducer;
