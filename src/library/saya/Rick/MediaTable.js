import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BreakAllContentText from '../BreakAllContentText';
import GreenButton from '../bob/GreenButton';
import TextField from './TextField';
import ImageContainer from '../ImageContainer';
import PartnerForm from './PartnerForm';
import { Slide } from '../reveal';

const useStyles = makeStyles(theme => ({
  container: {
  },
  root: {
    width: 310,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontFamily: 'FilsonSoft-Bold',
  },
  divider1: {
    width: '100%',
    height: 2,
    backgroundColor: '#000000',
  },
  divider2: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
  },
}));


export default (props) => {
  const {
    title,
    rows = [],
  } = props;
  const classes = useStyles();

  return (
    <div
      className={classes.root}
    >
      <div className={classes.title}>
        <BreakAllContentText style={{ fontFamily: 'FilsonSoft-Bold' }}>
          {title}
        </BreakAllContentText>
      </div>
      <div style={{ width: '100%', height: 10 }} />
      <div className={classes.divider1} />
      {rows.map((row) => {
        return (
          <React.Fragment key={row.id}>
            <div style={{ width: '100%', paddingTop: 11, paddingBottom: 11, display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
              <div style={{ flex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <BreakAllContentText style={{ width: 230, fontFamily: 'FilsonSoft-Bold', fontSize: 12 }}>
                  {row.name}
                </BreakAllContentText>
              </div>
              <div style={{ flex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', paddingLeft: 8 }}>
                <BreakAllContentText style={{ fontFamily: 'FilsonSoftRegular', fontSize: 12, color: '#64703f' }}>
                  {row.url ? (<a href={row.url} target="_blank" style={{ fontFamily: 'FilsonSoftRegular', fontSize: 12, color: '#64703f' }}><u>{row.linkName}</u></a>) : row.linkName}
                </BreakAllContentText>
              </div>
            </div>
            {row.body}
            <div className={classes.divider2} />
          </React.Fragment>
        );
      })}
      <div className={classes.divider2} />
    </div>
  );
};
