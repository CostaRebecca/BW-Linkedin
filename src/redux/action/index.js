import { PUT_USER_POST } from "./posts";

const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_URL = "https://striveschool-api.herokuapp.com/api";
/*
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

export const addFavouritesIdAction = (id) => ({ type: ADD_FAVOURITES_ID, payload: id });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });
*/
export const ADD_USER_DATA = "ADD_USER_DATA";
export const ADD_USERS = "ADD_USERS";

export const GET_USER_EXPERIENCES = "GET_USER_EXPERIENCES";
export const POST_USER_EXPERIENCE = "POST_USER_EXPERIENCE";
export const PUT_USER_EXPERIENCE = "PUT_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";

export const postPicture = (id, body, type, userData) => {
  return async (dispatch) => {
    let path = "";
    if (type === "experience") {
      path = `/profile/${userData._id}/experiences/${id}/picture`;
    } else if (type === "post") {
      path = `/posts/${id}`;
    } else {
      path = `/profile/${userData._id}/picture`;
    }
    try {
      let resp = await fetch(`${BASE_URL}${path}`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        console.log(data);
        if (type === "experience") {
          dispatch({ type: PUT_USER_EXPERIENCE, id: id, payload: data });
        } else if (type === "post") {
          data = data._doc;
          data.user = userData;
          dispatch({ type: PUT_USER_POST, id: id, payload: data });
        } else {
          //dispatch({ type: ADD_USER_DATA, payload: data });
        }
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const postUserPicture = (userId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/${userId}/picture`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION
          //"Content-Type": "multipart/form-data"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const getUserExperiences = (userId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/${userId}/experiences`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_USER_EXPERIENCES, payload: data });
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const postUserExperience = (userId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: POST_USER_EXPERIENCE, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const putUserExperience = (userId, expId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/${userId}/experiences/${expId}`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        //let data = await resp.json();
        //console.log(data);
        dispatch({ type: PUT_USER_EXPERIENCE, id: expId, payload: JSON.parse(body) });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const deleteUserExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/${userId}/experiences/${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        }
      });
      if (resp.ok) {
        dispatch({ type: DELETE_USER_EXPERIENCE, payload: expId });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const addUsers = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        data = data.slice(0, 10);
        dispatch({ type: ADD_USERS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};

export const addUserData = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/me`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};

export const putUserData = (body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/profile/`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};
