import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const footerData = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
    ],
  },
  {
    title: 'Resources',
    description: [
      'Resource',
      'Resource name',
      'Another resource',
      'Final resource',
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const Copyright = () => {
  return (
    <Typography variant='body2' color='text.secondary' align='center' mt={5}>
      {'Copyright © '}
      <Link color='inherit' href='#'>
        Track & Trace
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Container
      align='center'
      maxWidth='md'
      component='footer'
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent='space-evenly'>
        {footerData.map((data) => (
          <Grid item xs={6} sm={3} key={data.title}>
            <Typography variant='h6' color='text.primary' gutterBottom>
              {data.title}
            </Typography>
            <ul>
              {data.description.map((item) => (
                <li key={item}>
                  <Link href='#' variant='subtitle2' color='text.secondary'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright />
    </Container>
  );
};

export default Footer;
