import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import { DeliveryDiningOutlined } from '@mui/icons-material';
import Tracker from '../../components/Tracker/Tracker';

const Home = ({ data, setData, authenticated, setAuthType }) => {
  const [shippingId, setShippingId] = useState('');
  const [isValid, setIsValid] = useState(false);
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            color='text.primary'
            gutterBottom
          >
            Track & Trace
          </Typography>
          <Typography
            variant='h6'
            align='center'
            color='text.secondary'
            paragraph
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dolore laboriosam temporibus. Molestias dolore, , eveniet sit, nulla
            blanditiis incidunt quaerat quo accusantium ab.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction='row'
            spacing={2}
            justifyContent='center'
          >
            <TextField
              fullWidth
              name='shipping number'
              label='Shipping number'
              onChange={(e) => {
                setShippingId(e.target.value);
              }}
            />
            <Button
              variant='contained'
              onClick={() => {
                console.log({
                  shippingId,
                  id: data.woNum,
                });
                shippingId &&
                  parseInt(shippingId) === data.woNum &&
                  setIsValid(true);
              }}
            >
              <DeliveryDiningOutlined />
            </Button>
          </Stack>
          {isValid && (
            <Tracker
              data={data}
              setData={setData}
              authenticated={authenticated}
              setAuthType={setAuthType}
            />
          )}
        </Container>
      </Box>
    </main>
  );
};

export default Home;
