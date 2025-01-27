import CONTACT from '@/constants/contact';
import { Box, Container } from '@radix-ui/themes';
import React from 'react';

export const { metadata } = CONTACT;

const Contact: React.FC = () => {
  return (
    <Container>
      <Box>Contact</Box>
    </Container>
  );
};

export default Contact;
