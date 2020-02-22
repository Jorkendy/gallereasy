import { connect } from "react-redux";

import Favorites from "../../pages/Favorites";
import {
  onGetFavorites,
  onDislike,
  onResetFavorites
} from "../actions/favorites.actions";
import { onUpdateLike } from "../actions/search.actions";

const mapStateToProps = (state /*, ownProps*/) => {
  let { FavoritesReducer } = state;

  return {
    isLoading: FavoritesReducer.isLoading,
    errorMessage: FavoritesReducer.errorMessage,
    data: FavoritesReducer.data,
    likes: FavoritesReducer.likes
  };
};

const mapDispatchToProps = { onGetFavorites, onDislike, onResetFavorites, onUpdateLike };

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
