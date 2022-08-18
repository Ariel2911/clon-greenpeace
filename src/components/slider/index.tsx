import styled from 'styled-components';

const Container = styled.div`
  font-family: Roboto, sans-serif;
  
`;

const defaultProps = {
  title: 'Slider'
};

export interface params {
  title?: string;
};

const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params}
  return (
  <Container>
    <h1>{params.title}</h1>
  </Container>
)};

export default App;
