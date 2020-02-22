import { connect } from "react-redux";

import Search from "../../pages/Search";
import { onSearch, onLike } from "../actions/search.actions";

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

const mapDispatchToProps = { onSearch, onLike };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
