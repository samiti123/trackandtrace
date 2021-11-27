import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import Activities from '../Activities/Activities';

const useStyles = makeStyles({
  root: {
    padding: '15px',
  },
  button: {
    height: '25px',
    fontSize: '12px',
  },
  info: {
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

const Tracker = ({ data, setData, authenticated, setAuthType }) => {
  const classes = useStyles();
  const [buttonLabel, setButtonLabel] = useState('');

  const disableButton =
    !authenticated ||
    (buttonLabel === 'Cancel' && !data.cancelable) ||
    (buttonLabel === 'Reopen' && !data.reopenable);

  const handleActionClick = () => {
    if (buttonLabel === 'Cancel') {
      setData({ ...data, cancelable: false });
    } else if (buttonLabel === 'Reopen') {
      setData({ ...data, cancelable: true });
    }
  };

  useEffect(() => {
    if (data.cancelable) {
      setButtonLabel('Cancel');
    } else if (!data.cancelable && data.reopenable) {
      setButtonLabel('Reopen');
    }
  }, [data]);

  return (
    <Container sx={{ mt: 4 }}>
      <Paper variant='outlined' className={classes.root}>
        <Typography variant='h6'>Shipping details</Typography>
        <Stack
          sx={{ pt: 2 }}
          direction='row'
          spacing={2}
          justifyContent='space-between'
          color='text.secondary'
        >
          <Typography>Order placed</Typography>
          <Typography>{data.creationDate}</Typography>
        </Stack>
        <Stack
          sx={{ pt: 2 }}
          direction='row'
          spacing={2}
          justifyContent='space-between'
          color='text.secondary'
        >
          <Typography>Status</Typography>
          <Typography>{data.woStatusText}</Typography>
        </Stack>
        <Stack
          sx={{ pt: 2 }}
          direction='row'
          spacing={2}
          justifyContent='space-between'
          color='text.secondary'
        >
          <Typography>{`${buttonLabel} order`}</Typography>
          <Button
            variant='contained'
            className={classes.button}
            disabled={disableButton}
            onClick={handleActionClick}
          >
            {buttonLabel}
          </Button>
        </Stack>
      </Paper>
      {!authenticated ? (
        <Typography variant='subtitle1' color='text.secondary' sx={{ pt: 5 }}>
          Please{' '}
          <span className={classes.info} onClick={() => setAuthType('login')}>
            Login
          </span>{' '}
          to view activities and perform actions.
        </Typography>
      ) : (
        <Activities data={data} setData={setData} />
      )}
    </Container>
  );
};

export default Tracker;
