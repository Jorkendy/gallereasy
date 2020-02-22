import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import FavoriteIcon from '@material-ui/icons/Favorite';

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
  favoriteIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
    visibility: "hidden"
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Search = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <SearchBox>
        <TextField
          className={classes.textField}
          placeholder="Start searching for images!"
        />
      </SearchBox>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <FavoriteIcon className={classes.favoriteIcon} color="error" />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Search;

const Wrapper = styled.div`
  margin-top: 30px;
`;

const SearchBox = styled.div`
  width: 100%;
  text-align: center;
`;