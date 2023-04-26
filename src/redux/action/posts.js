const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";

export const GET_USER_POSTS = "GET_USER_POSTS";
export const POST_USER_POST = "POST_USER_POST";
export const PUT_USER_POST = "PUT_USER_POST";
export const DELETE_USER_POST = "DELETE_USER_POST";

export const getUserPosts = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        let latest = data.filter((post) => new Date(post.createdAt).getFullYear() >= 2023).reverse();
        dispatch({ type: GET_USER_POSTS, payload: latest });
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

export const postUserPost = (userData, postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        data.user = userData;
        dispatch({ type: POST_USER_POST, payload: data });
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

export const putUserPost = (userData, postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}${postId}`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        data.user = userData;
        //console.log(data);
        dispatch({ type: PUT_USER_POST, id: postId, payload: data });
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

export const deleteUserPost = (postId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_POST_URL}${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        }
      });
      if (resp.ok) {
        dispatch({ type: DELETE_USER_POST, payload: postId });
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
