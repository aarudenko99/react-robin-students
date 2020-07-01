import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '1px solid #F1F3F4',
    boxSizing: 'border-box',
    borderRadius: '15px',
    padding: '32px'
  },
}))

const EditPortfolio = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>dfd</div>
  )
};

export default EditPortfolio;