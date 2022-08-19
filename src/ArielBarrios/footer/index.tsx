import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-color: #074365;
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
const List = styled.ul`
  
  `; 
const Item = styled.li`
  
  `; 
const Link = styled.a`
  
  `; 
const SocialNetworkTitle = styled.h2`
  width: 10px;
  height: 10px;
  `; 
const SocialNetwork = styled.img`
  width: 10px;
  height: 10px;
  `; 
const Footer = styled.div`
  background-color: #05324c;
`; 
const Copyright = styled.p`
  
`; 
const FooterText = styled.p`
  
`; 

export interface params {
  logoIcon: string;
  optionSelect: string[];
  List1: string[];
  List2: string[];
  SocialNetworkTitle: string;
  SocialNetwork: string[];
  footerText: string;
  copyrigth: string;
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
      <SocialNetworkTitle />
      <List>
        <Item>
          <Link>
            <SocialNetwork />
          </Link>
        </Item>
      </List>
    </Main>
    <Footer>
      <Copyright>hola</Copyright>
      <FooterText>Hola2</FooterText>
    </Footer>
  </Container>
);

App.defaultProps = {
  logoIcon: '/public/greenpeace/gp-logo.svg',
  optionSelect: ['Argentina', 'Chile'],
  List1: [{'Noticias':''},{'Blog':''},{'Sobre Nosotros':''},{'Prensa':''},{'Preguntas frecuentes':''},{'Trabajá con nonsotros':''},{'Actualizá tus datos':''},],
  List2: [{'Solicitud de baja':''},{'Política de privacidad':''},{'Política de comunidades':''},{'Derechos de autor':''},{'Terminos y Condiciones':''},{'Archivo':''},{'Mapa del sitio':''},],
  SocialNetworkTitle: 'Follow us',
  SocialNetwork: ['/public/greenpeace/facebook.svg','/public/greenpeace/twitter.svg','/public/greenpeace/youtube.svg','/public/greenpeace/instagram.svg',],
  footerText: '&copy; Greenpeace Argentina 2022',
  copyrigth: 'A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY',
};

export default App;
