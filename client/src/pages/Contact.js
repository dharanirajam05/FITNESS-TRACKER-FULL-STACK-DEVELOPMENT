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

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Paragraph>
        If you have any questions or need assistance, please feel free to contact us at:
      </Paragraph>
      <Paragraph>
        Email: dharani@fittrack.com
      </Paragraph>
      <Paragraph>
        Phone: 123-456-7890
      </Paragraph>
    </Container>
  );
};

export default Contact;
