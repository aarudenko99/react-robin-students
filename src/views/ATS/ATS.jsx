import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px'
  }
}))

const ATS = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>aaa</div>
  )
};

export default ATS;