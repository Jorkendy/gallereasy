import get from "lodash/get";

import {
  Search,
  SearchSuccess,
  SearchFail,
  KeywordChange,
  Like,
  ResetSearch,
  UpdateLikesInSearch
} from "../types";

const initialState = {
  data: [],
  isLoading: false,
  errorMessage: "",
  total: 0,
  from: 0,
  keyword: "",
  likes: localStorage.getItem("likes")
    ? JSON.parse(localStorage.getItem("likes"))
    : []
};

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case KeywordChange:
      return {
        ...state,
        keyword: action.keyword
      };
    case Search:
      return {
        ...state,
        isLoading: true,
        ...(state.keyword.trim() !== action.keyword.trim() && {
          data: [],
          from: 0,
          total: 0,
          keyword: action.keyword
        })
      };
    case SearchSuccess:
      return {
        ...state,
        isLoading: false,
        data: [...state.data, ...action.data],
        total: get(action, "pagination.total_count", 0),
        from: get(state, "from", 0) + 8
      };
    case SearchFail:
      return {
        ...state,
        isLoading: false,
        errorMessage: "Fail"
      };
    case Like:
      const likes = state.likes;
      if (likes.includes(action.id)) {
        localStorage.setItem(
          "likes",
          JSON.stringify(likes.filter(item => item !== action.id))
        );
        return {
          ...state,
          likes: likes.filter(item => item !== action.id)
        };
      } else {
        localStorage.setItem("likes", JSON.stringify([...likes, action.id]));

        return {
          ...state,
          likes: [...likes, action.id]
        };
      }
    case ResetSearch:
      return {
        ...state,
        data: [],
        isLoading: false,
        errorMessage: "",
        total: 0,
        from: 0,
        keyword: "",
        likes: localStorage.getItem("likes")
          ? JSON.parse(localStorage.getItem("likes"))
          : []
      };
    case UpdateLikesInSearch:
      return {
        ...state,
        likes: action.likes
      };
    default:
      return state;
  }
}
