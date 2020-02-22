import {
  GetFavorites,
  GetFavoritesSuccess,
  GetFavoritesFail,
  Dislike,
  ResetFavorites,
  UpdateLikesInFavorites
} from "../types";

const initialState = {
  data: [],
  isLoading: false,
  errorMessage: "",
  likes: localStorage.getItem("likes")
    ? JSON.parse(localStorage.getItem("likes"))
    : []
};

export default function FavoritesReducer(state = initialState, action) {
  switch (action.type) {
    case GetFavorites:
      return {
        ...state,
        isLoading: true
      };
    case GetFavoritesSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case GetFavoritesFail:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Fail"
      };
    case Dislike:
      const likes = state.likes;
      localStorage.setItem(
        "likes",
        JSON.stringify(likes.filter(item => item !== action.id))
      );
      return {
        ...state,
        likes: likes.filter(item => item !== action.id),
        data: state.data.filter(item => item.id !== action.id)
      };
    case ResetFavorites:
      return {
        ...state,
        data: [],
        isLoading: false,
        errorMessage: "",
        likes: localStorage.getItem("likes")
          ? JSON.parse(localStorage.getItem("likes"))
          : []
      };
    case UpdateLikesInFavorites:
      return {
        ...state,
        likes: action.likes
      };
    default:
      return state;
  }
}
