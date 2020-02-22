import get from "lodash/get";

import { Search, SearchSuccess, SearchFail, Like } from "../types";
import services from "../../services/services";

export const onSearch = (keyword, from) => {
  return async dispatch => {
    try {
      dispatch({ type: Search, keyword });
      const response = await services.onSearch(keyword, from);
      // console.log(response);
      const data = get(response, "data.data", []).map((item, index) => ({
        id: get(item, "id", index),
        url: get(item, "images.preview_gif.url", "")
      }));
      const pagination = get(response, "data.pagination", {});
      return dispatch({ type: SearchSuccess, data, pagination });
    } catch (error) {
      return dispatch({ type: SearchFail, error });
    }
  };
};

export const onLike = id => {
  return async dispatch => {
    dispatch({ type: Like, id });
  };
};
