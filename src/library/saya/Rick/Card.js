import React from 'react';
import moment from 'moment';
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
    marginBottom: 60,
    display: 'inline-block',
    borderRadius: 0,
  },
  media: {
    position: 'relative',
  },
  // mask: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   width: '100%',
  //   height: '100%',
  //   opacity: 0.5,
  //   backgroundColor: '#000000',
  // },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  cardAction: {
    paddingTop: 0,
    paddingRight: 0,
    paddingLeft: 0,
    paddingBottom: 0,
    marginBottom: 20,
  },
});

export default ({
  height,
  width,
  title,
  timestamp = new Date(),
  description,
  image,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ width }} elevation={0}>
      {/* <CardActionArea onClick={onClick}> */}
      <CardMedia
        className={classes.media}
        style={{ height }}
        image={image}
      />
      <CardContent className={classes.content}>
        {timestamp && (
          <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', fontSize: 12, lineHeight: 1.5, marginBottom: 8 }}>
            {moment(timestamp).format('LL')}
          </BreakAllContentText>
        )}
        <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold', fontSize: 22, lineHeight: '26px', textAlign: 'left', marginBottom: 8 }}>
          {title}
        </BreakAllContentText>
        <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 14, lineHeight: 1.4 }}>
          {description}
        </BreakAllContentText>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions className={classes.cardAction}>
        <Button
          size="small"
          color="primary"
          style={{
            textDecoration: 'underline', color: '#c0c823', textTransform: 'none', padding: 0,
          }}
          onClick={onClick}
        >
          <span>Read More</span>
        </Button>
      </CardActions>
    </Card>
  );
};
