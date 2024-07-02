import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.primary};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
`;

const AboutUs = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Paragraph>
        Welcome to Fittrack! We are dedicated to helping you achieve your fitness goals.
        Our platform offers a variety of workout tutorials and tracking features to support your fitness journey.
        Whether you're a beginner or a seasoned athlete, we have something for everyone. Join us today and start tracking your progress!
      </Paragraph>
    </Container>
  );
};

export default AboutUs;
