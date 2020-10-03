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
    marginBottom: 40,
    borderRadius: 0,
  },
  media: {
    position: 'relative',
  },
  // mask: {
  //   width: '100%',
  //   height: '100%',
  //   opacity: 0.5,
  //   backgroundColor: '#000000',
  // },
  titleSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    width: 260,
    height: 200,
    color: '#ffffff',
  },
  cardAction: {
    paddingTop: 10,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 9,
  },
});

export default ({
  height,
  width,
  title,
  description,
  image,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ width }} elevation={0}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          className={classes.media}
          style={{ height }}
          image={image}
        // title="Contemplative Reptile"
        >
          <div className={classes.titleSection}>
            <div className={classes.title}>
              <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', fontSize: 28 }}>
                {title}
              </BreakAllContentText>
            </div>
          </div>
        </CardMedia>
        {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
        {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 13, lineHeight: 1.54, paddingTop: 16, paddingBottom: 10, }}>
          {description}
        </BreakAllContentText>
      </CardActionArea>
      <div className={classes.cardAction}>
        <div style={{ flex: 1 }} />
        <Button size="small" color="primary" style={{ color: '#c0c823' }} onClick={onClick}>
          <u>Read More</u>
        </Button>
      </div>
    </Card>
  );
};
