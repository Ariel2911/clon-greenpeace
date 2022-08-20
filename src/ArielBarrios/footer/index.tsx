import styled from 'styled-components';

const Container = styled.div`
  text-align: start;
  background-color: #074365;
  color: white;
  font-family: Roboto, sans-serif;  
`; 
const Header = styled.div`
  max-width: 1024px;
  margin: auto;
  
`; 
const Img = styled.img`
  width: 10px;
  height: 10px;
`; 
const Select = styled.select`
  
`; 
const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 1024px;

`; 
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  `; 
const Item = styled.li`
  
  `; 
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  `; 
const SocialNetworkContainer = styled.div`
  /* width: 10px;
  height: 10px; */
`; 
const SocialNetworkTitle = styled.h2`
  font-size: 16px;
`; 
const SocialNetworkList = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`; 
const SocialNetwork = styled.img`
  width: 24px;
  height: 24px;
`; 
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #05324c;
  font-size: 12px;
  color: #ececec;
`; 
const Copyright = styled.p`
  
`; 
const FooterText = styled.p`
  margin: 8px 16px;
  padding-left: 16px;
  border-left: 1px solid #ececec;
`; 

export interface params {
  logoIcon: string;
  optionSelect: string[];
  List1: object[];
  List2: object[];
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
        {
          params.List1.map((item, index) => {
            const itemName = Object.keys(item).toString();
            const itemHref = Object.values(item).toString();
            return(
            <Item key={index}>
              <Link href={itemHref}>{itemName}</Link>
            </Item>
            )
          })
        }
      </List>
      <List>
        {
          params.List2.map((item, index) => {
            const itemName = Object.keys(item).toString();
            const itemHref = Object.values(item).toString();
            return(
            <Item key={index}>
              <Link href={itemHref}>{itemName}</Link>
            </Item>
            )
          })
        }
      </List>
      
      <SocialNetworkContainer>
        <SocialNetworkTitle>{params.SocialNetworkTitle}</SocialNetworkTitle>
        <SocialNetworkList>
        {
          params.SocialNetwork.map((item, index) => {
            const itemIcon = Object.keys(item).toString();
            const itemHref = Object.values(item).toString();
            return(
              <Item key={index}>
                <Link href={itemHref}>
                  <SocialNetwork src={itemIcon} />
                </Link>
              </Item>
          )})
        }
      </SocialNetworkList>
      </SocialNetworkContainer>
    </Main>

    <Footer>
      <Copyright>&copy; {params.copyrigth}</Copyright>
      <FooterText>{params.footerText}</FooterText>
    </Footer>
  </Container>
);

App.defaultProps = {
  logoIcon: '/public/greenpeace/gp-logo.svg',
  optionSelect: ['Argentina', 'Chile'],
  List1: [{'Noticias':''},{'Blog':''},{'Sobre Nosotros':''},{'Prensa':''},{'Preguntas frecuentes':''},{'Trabajá con nonsotros':''},{'Actualizá tus datos':''},],
  List2: [{'Solicitud de baja':''},{'Política de privacidad':''},{'Política de comunidades':''},{'Derechos de autor':''},{'Terminos y Condiciones':''},{'Archivo':''},{'Mapa del sitio':''},],
  SocialNetworkTitle: 'Follow us',
  SocialNetwork: [{'/public/greenpeace/facebook.svg':''},{'/public/greenpeace/twitter.svg':''},{'/public/greenpeace/youtube.svg':''},{'/public/greenpeace/instagram.svg':''},],
  copyrigth: 'Greenpeace Argentina 2022',
  footerText: 'A menos que se indique lo contrario, la copia del sitio web está autorizada bajo una licencia internacional CC-BY',
};

export default App;
