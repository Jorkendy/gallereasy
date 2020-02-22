import get from "lodash/get";

import {
  GetFavorites,
  GetFavoritesSuccess,
  GetFavoritesFail,
  Dislike,
  ResetFavorites,
  UpdateLikesInFavorites
} from "../types";
import services from "../../services/services";

export const onGetFavorites = () => {
  return async dispatch => {
    try {
      dispatch({ type: GetFavorites });
      const ids = localStorage.getItem("likes")
        ? JSON.parse(localStorage.getItem("likes"))
        : [];
      const response = await services.onGetFavorites(ids.join(","));
      const data = get(response, "data.data", []).map((item, index) => ({
        id: get(item, "id", index),
        url: get(item, "images.preview_gif.url", "")
      }));
      return dispatch({ type: GetFavoritesSuccess, data });
    } catch (error) {
      return dispatch({ type: GetFavoritesFail, error });
    }
  };
};

export const onDislike = id => {
  return async dispatch => {
    dispatch({ type: Dislike, id });
  };
};

export const onResetFavorites = () => {
  return async dispatch => {
    dispatch({ type: ResetFavorites })
  }
}

export const onUpdateLike = likes => {
  return async dispatch => {
    dispatch({ type: UpdateLikesInFavorites, likes})
  }
}