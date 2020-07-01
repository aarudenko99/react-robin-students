import React from 'react';

import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  row: {
    alignItems: 'center',
    display: 'flex',
    margin: '20px 0 10px 0'
  },
  avatar: {
    width: '32px',
    height: '32px',
    marginRight: '5px'
  },
  remain: {
    fontSize: '14px',
    color: '#8798AD',
    marginTop: '3px'
  },
}))

const AppStatus = props => {
  const { statusList } = props;
  const classes = useStyles();

  return(
    <div>
      {statusList.map((item, index) => (
        <div key={index}>
          <Grid key={index} item xs={12} className={classes.row}>
            <div>
              <Avatar
                className={classes.avatar}
                src={item.avatarUrl}
              >
                {item.avatarUrl}
              </Avatar>
            </div>
            <div>
              <span className={item.status}>{item.status}</span>
              <span>{item.description}</span>
              <Typography className={classes.remain}>
                {item.deadLine}
              </Typography>
            </div>
          </Grid>
          <Divider />
        </div>
      ))}
    </div>
  )
};

export default AppStatus;