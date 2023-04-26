const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_JOB_URL = "https://strive-benchmark.herokuapp.com/api/jobs?";

export const JOB_BOOKMARK_ADD = "JOB_BOOKMARK_ADD";
export const JOB_BOOKMARK_REMOVE = "JOB_BOOKMARK_REMOVE";
export const JOB_SEARCH_KIND_UPDATE = "JOB_SEARCH_KIND_UPDATE";
export const JOB_SEARCH = "JOB_SEARCH";

export const jobAddToBookmark = (job) => ({ type: JOB_BOOKMARK_ADD, payload: job });
export const jobRemoveFromBookmark = (job) => ({ type: JOB_BOOKMARK_REMOVE, payload: job });
export const jobSearchKindUpdate = (str) => ({ type: JOB_SEARCH_KIND_UPDATE, payload: str });

/*
https://strive-benchmark.herokuapp.com/api/jobs?search=
https://strive-benchmark.herokuapp.com/api/jobs?company=Olla
https://strive-benchmark.herokuapp.com/api/jobs?category=writing&limit=10

*/

export const getJobsSearch = (param) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_JOB_URL}${new URLSearchParams(param)}`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let { data } = await resp.json();
        dispatch({ type: JOB_SEARCH, payload: data });
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
