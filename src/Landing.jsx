import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const backgroundImage =
  'https://images.unsplash.com/photo-1653047256226-ab0d16c758d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

const LandingRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  height: '60vh',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function Landing() {

  return (
    <LandingRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'primary',
            opacity: 0.9,
            zIndex: -1,
          }}
        />
        <Background
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9', // Average color of the background image.
            backgroundPosition: 'center',
          }}
        />
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt="increase priority"
        />
                <Box
          //component="img"
          //src="/static/themes/onepirate/productHeroArrowDown.png"
          height="300"
          width="12"
          alt="arrow down"
          sx={{ position: 'absolute', bottom: 32 }}
        />
      </Container>
    </LandingRoot>
  );
}

Landing.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Landing;
