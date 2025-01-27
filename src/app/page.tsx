import HOME from '@/constants/home';
import { Box, Container } from '@radix-ui/themes';
import React from 'react';

export const { metadata } = HOME;

const Home: React.FC = () => {
  return (
    <Container>
      <Box>Home</Box>
    </Container>
  );
};

export default Home;
