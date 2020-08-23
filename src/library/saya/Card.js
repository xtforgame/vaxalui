import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BreakAllContentText from './BreakAllContentText';

const useStyles = makeStyles({
  root: {
    width: 368,
    margin: 20,
    borderRadius: 30,
  },
  media: {
    height: 324,
    position: 'relative',
  },
  mask: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  title: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    paddingTop: 60,
    paddingRight: 30,
    paddingLeft: 30,
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
  },
});

export default ({
  title,
  description,
  image,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={8}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        >
          <div className={classes.mask} />
          <div className={classes.title}>
            <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', fontSize: 28 }}>
              {title}
            </BreakAllContentText>
          </div>
        </CardMedia>
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 14, lineHeight: 1.5 }}>
            {description}
          </BreakAllContentText>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <div style={{ flex: 1 }} />
        <Button size="small" color="primary" style={{ color: '#c0c823' }}>
          <u>Read More</u>
        </Button>
      </CardActions>
    </Card>
  );
};
