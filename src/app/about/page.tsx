import ABOUT from '@/constants/about';
import { Box, Container } from '@radix-ui/themes';
import React from 'react';

export const { metadata } = ABOUT;

const About: React.FC = () => {
  return (
    <Container>
      <Box>About</Box>
    </Container>
  );
};

export default About;
