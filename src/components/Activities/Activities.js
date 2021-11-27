import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
  root: {
    padding: '15px',
  },
});

const Activities = ({ data, setData }) => {
  const classes = useStyles();
  const date = new Date();
  const messageDate = date.toISOString().split('T')[0];
  const messageTime = date.toLocaleTimeString('en-US', { hour12: false });

  const [newActivity, setNewActivity] = useState({
    activityCode: 'Message',
    status: 'active',
    activityStart: {
      startDate: messageDate,
      startTime: messageTime,
    },
    activityFinish: {
      finishDate: messageDate,
      finishTime: messageTime,
    },
    customerMessage: '',
  });
  const activities = data && data.activities && data.activities.length > 0;
  const handleSubmit = () => {
    setData({ ...data, activities: [...data.activities, newActivity] });
  };

  return (
    <>
      <Paper variant='outlined' className={classes.root} sx={{ mt: 4 }}>
        <Typography variant='h6'>Activities</Typography>
        {activities &&
          data.activities.map((activity, index) => {
            const status = activity.status
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' ');

            return (
              <div key={index}>
                <Stack
                  sx={{ pt: 2 }}
                  direction='row'
                  spacing={2}
                  justifyContent='space-between'
                  color='text.secondary'
                >
                  <Typography>{activity.activityCode}</Typography>
                  <Typography>
                    {activity.activityFinish.finishDate}{' '}
                    {activity.activityFinish.finishTime}
                  </Typography>
                </Stack>
                <Stack
                  sx={{ pt: 1 }}
                  direction='row'
                  spacing={2}
                  justifyContent='space-between'
                  color='text.secondary'
                >
                  <Typography>Status</Typography>
                  <Typography>{status}</Typography>
                </Stack>
                <Stack
                  sx={{ pt: 1, pb: 2 }}
                  direction='row'
                  spacing={2}
                  justifyContent='space-between'
                  color='text.secondary'
                >
                  <Typography>Message</Typography>
                  <Typography>{activity.customerMessage}</Typography>
                </Stack>
              </div>
            );
          })}
      </Paper>
      <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
        <TextField
          fullWidth
          name='message'
          label='Send new message'
          onChange={(e) => {
            setNewActivity({ ...newActivity, customerMessage: e.target.value });
          }}
        />
        <Button variant='contained' onClick={handleSubmit}>
          <SendOutlined />
        </Button>
      </Stack>
    </>
  );
};

export default Activities;
