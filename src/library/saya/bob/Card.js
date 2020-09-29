import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BreakAllContentText from '../BreakAllContentText';

const useStyles = makeStyles({
  root: {
    marginBottom: 72,
    display: 'inline-block',
  },
  media: {
    position: 'relative',
  },
  mask: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#000000',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 26,
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: '#ffffff',
    top: 0,
    padding: 15,
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
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
        >
          <div className={classes.mask}>
            <div className={classes.title}>
              <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', fontSize: 28, textAlign: 'left' }}>
                {title}
              </BreakAllContentText>
            </div>
          </div>
        </CardMedia>
        <CardContent>
          <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 14, lineHeight: 1.5 }}>
            {description}
          </BreakAllContentText>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary" style={{ textDecoration: 'underline', color: '#c0c823', textTransform: 'none' }} onClick={onClick}>
          <span>Read More</span>
        </Button>
      </CardActions>
    </Card>
  );
};
