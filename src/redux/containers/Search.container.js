import { connect } from "react-redux";

import Search from "../../pages/Search";
import { onSearch, onLike, onResetSearch } from "../actions/search.actions";
import { onUpdateLike } from "../actions/favorites.actions";

const mapStateToProps = (state /*, ownProps*/) => {
  let { SearchReducer } = state;

  return {
    isLoading: SearchReducer.isLoading,
    errorMessage: SearchReducer.errorMessage,
    data: SearchReducer.data,
    total: SearchReducer.total,
    from: SearchReducer.from,
    likes: SearchReducer.likes
  };
};

const mapDispatchToProps = { onSearch, onLike, onResetSearch, onUpdateLike };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
