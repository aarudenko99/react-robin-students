import React from 'react';
import { makeStyles } from '@material-ui/styles';

import {
  Grid,
  Typography,
} from '@material-ui/core';

import {
  FilterList
} from '@material-ui/icons';

import { SearchInput } from 'components';

import PreCard from './PreCard';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  row: {
    display: 'flex',
    alignItems: 'center'
  },
  bubbling: {
    color: theme.palette.primary.main,
    fontSize: '40px',
    fontWeight: 'bold'
  },
  brief: {
    color: '#8798AD',
    fontSize: '18px',
    textTransform: 'uppercase',
    marginBottom: '24px'
  },
  icon: {
    width: '40px',
    height: '40px',
    margin: '0 20px'
  }
}))

const contents = [
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
  {
    name: 'Challenge name',
    duration: 'May 19 - May 30'
  },
]

const PreChallenges = () => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.brief}>previous  challenges</Typography>
        </Grid>
        <Grid item xs={12} className={classes.row}>
          <SearchInput placeholder="Search by Name"/>
          <FilterList className={classes.icon}/>
        </Grid>
        <Grid item xs={12}>
          {contents.map((content, index) => (
            <PreCard key={index}/>
          ))}
        </Grid>
      </Grid>
    </div>
  )
};

export default PreChallenges;