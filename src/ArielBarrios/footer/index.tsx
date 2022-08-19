import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`; 
const Header = styled.div`
  
`; 
const Img = styled.img`
  width: 10px;
  height: 10px;
`; 
const Select = styled.select`
  
`; 
const Main = styled.div`
  
`; 
const Footer = styled.div`
  
`; 
const List = styled.ul`
  
`; 
const Item = styled.li`
  
`; 
const Link = styled.a`
  
`; 
const NetworkSocialTitle = styled.h2`
  width: 10px;
  height: 10px;
`; 
const NetworkSocial = styled.img`
  width: 10px;
  height: 10px;
`; 
const Copyright = styled.p`
  
`; 
const FooterText = styled.p`
  
`; 

export interface params {
  
};

const App = (params: params) =>(
  <Container>
    <Header>
      <Img />
      <Select>
        <option></option>
      </Select>
    </Header>
    <Main>
      <List>
        <Item>
          <Link />
        </Item>
      </List>
      <List>
        <Item>
          <Link />
        </Item>
      </List>
      <NetworkSocialTitle />
      <List>
        <Item>
          <Link>
            <NetworkSocial />
          </Link>
        </Item>
      </List>
    </Main>
    <Footer />
  </Container>
);

App.defaultProps = {
  
};

export default App;
