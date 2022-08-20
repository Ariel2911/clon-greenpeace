import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 52px ;
`; 
const Img = styled.img`
  width: 850px;
  height: 350px;
`; 

export interface params {
  img: string;
};

const App = (params: params) =>(
  <Container>
    <Img src={params.img} />
  </Container>
);

App.defaultProps = {
  img: '/public/greenpeace/banner-podcast.webp'
};

export default App;
