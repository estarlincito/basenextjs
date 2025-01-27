import Wrapper from '@/components/layout/wrapper';
import HOME from '@/constants/home';
import NOT_FOUNT from '@/constants/not-fount';
import { Box, Container, Heading, Link, Strong, Text } from '@radix-ui/themes';
import React from 'react';

export const { metadata } = NOT_FOUNT;
const {
  title,
  text,
  parr: { line1, line2 },
} = NOT_FOUNT;

const NotFound: React.FC = () => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Box>
          <Heading size='9'>{title}</Heading>
          <Text my='5'>{text}</Text>
          <Text>
            {line1}&nbsp;
            <Link target='_self' href={HOME.route}>
              <Strong>{HOME.title}</Strong>
            </Link>
            &nbsp;{line2}
          </Text>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
