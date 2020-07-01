import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
}));

const Calendar = () => {
  const [date, changeDate] = useState(new Date());

  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} className={classes.calendar}>
      <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={changeDate}
          
        />
    </MuiPickersUtilsProvider>
  );
};

export default Calendar;
