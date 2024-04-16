import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = () => {
  return (
    <Container>
      <RotatingLines
        width="60"
        strokeColor="rgb(72, 150, 239)"
        strokeWidth="3"
      />
    </Container>
  );
};
