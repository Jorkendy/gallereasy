import React, { useEffect } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PropTypes from "prop-types";

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

const Favorites = ({
  isLoading,
  data,
  errorMessage,
  likes,
  onDislike,
  onGetFavorites,
  onResetFavorites,
  onUpdateLike
}) => {
  const classes = useStyles();

  useEffect(() => {
    let isSubcribe = true;
    if (isSubcribe && likes.length > 0) {
      onGetFavorites();
    }

    return () => {
      isSubcribe = false;
      onResetFavorites();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    onUpdateLike(likes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

  const _onLike = id => () => {
    onDislike(id);
  };

  return (
    <Wrapper>
      <Container className={classes.cardGrid} maxWidth="md">
        {data.length > 0 ? (
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
          </Grid>
        ) : (
          <h1>No favorites</h1>
        )}
      </Container>
    </Wrapper>
  );
};

Favorites.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array,
  errorMessage: PropTypes.string,
  likes: PropTypes.array,
  onDislike: PropTypes.func,
  onGetFavorites: PropTypes.func,
  onResetFavorites: PropTypes.func,
  onUpdateLike: PropTypes.func
};

Favorites.defaultProps = {
  isLoading: false,
  data: [],
  errorMessage: "",
  likes: [],
  onDislike: null,
  onGetFavorites: null,
  onResetFavorites: null,
  onUpdateLike: null
};

export default Favorites;

const Wrapper = styled.div`
  margin-top: 30px;
`;
