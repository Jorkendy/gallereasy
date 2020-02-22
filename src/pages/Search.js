import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PropTypes from "prop-types";
import get from "lodash/get";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  textField: {
    width: "50%"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    position: "relative",

    "&:hover": {
      "& svg": {
        visibility: "visible"
      }
    }
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  like: {
    position: "absolute",
    right: 10,
    bottom: 10,
    visibility: "visible",
    opacity: 1
  },
  dislike: {
    position: "absolute",
    right: 10,
    bottom: 10,
    visibility: "hidden",
    opacity: 0.3
  },
  loadMore: {
    marginLeft: 15
  }
}));

const Search = ({
  isLoading,
  data,
  errorMessage,
  onSearch,
  total,
  from,
  likes,
  onLike,
  onResetSearch,
  onUpdateLike
}) => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    return () => {
      onResetSearch();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onUpdateLike(likes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

  const _onInputChange = event => {
    const newValue = get(event, "target.value", "");
    setKeyword(newValue.trim());
  };

  const _onKeydown = event => {
    const isEnter = parseInt(get(event, "keyCode", 0), 10) === 13;
    if (isEnter) {
      _onSearch();
    }
  };

  const _onSearch = () => {
    if (keyword.trim()) {
      onSearch(keyword, from);
    }
  };

  const _onLike = id => () => {
    onLike(id);
  };

  return (
    <Wrapper>
      <SearchBox>
        <TextField
          className={classes.textField}
          placeholder="Start searching for images!"
          value={keyword}
          onChange={_onInputChange}
          onKeyDown={_onKeydown}
        />
      </SearchBox>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {data.map(card => (
            <Grid item key={card.id} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.url}
                  title="Image title"
                />
                <FavoriteIcon
                  className={`${
                    likes.includes(card.id) ? classes.like : classes.dislike
                  }`}
                  color="error"
                  onClick={_onLike(card.id)}
                />
              </Card>
            </Grid>
          ))}
          {keyword.trim() && data.length < total ? (
            <Typography
              className={classes.loadMore}
              variant="subtitle1"
              color="primary"
              onClick={_onSearch}
            >
              Load more...
            </Typography>
          ) : null}
        </Grid>
      </Container>
    </Wrapper>
  );
};

Search.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  errorMessage: PropTypes.string,
  onSearch: PropTypes.func,
  total: PropTypes.number,
  from: PropTypes.number,
  likes: PropTypes.array,
  onLike: PropTypes.func,
  onResetSearch: PropTypes.func,
  onUpdateLike: PropTypes.func
};

Search.defaultProps = {
  isLoading: false,
  data: [],
  errorMessage: "",
  onSearch: null,
  total: 0,
  from: 0,
  likes: [],
  onLike: null,
  onResetSearch: null,
  onUpdateLike: null
};

export default Search;

const Wrapper = styled.div`
  margin-top: 30px;
`;

const SearchBox = styled.div`
  width: 100%;
  text-align: center;
`;
