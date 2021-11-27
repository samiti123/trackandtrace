import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export default function Footer() {
  return (
    <AppBar position='static' color='primary'>
      <Container maxWidth='md'>
        <Toolbar>
          <Typography variant='body1' color='inherit'>
            © 2021 Vodafone
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
