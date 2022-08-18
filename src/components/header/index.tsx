import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 68px;
  background-color: #074365;
  color: white;
`;
const Logo = styled.img`
  width: 11%;
  height: auto;
  margin-left: 10vw;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const Item = styled.li`
  margin: 0 16px;
  font-weight: 900;
  :last-child{
    margin: 0 16px 0 0;
    padding: 12px 17px;
    border: none;
    border-radius: 4px;
    background-color: #f36b35;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
  }
`;
const Link = styled.a`
  color: inherit;
  text-decoration: none;
`;
const Search = styled.div`
  display: flex;
  width: 23%;
  height: 100%;
  padding: 0 16px;
  border-left: 1px solid white;
`;
const Icon = styled.img`
  width: 22px;
`;
const Input = styled.input`
  width: 100%;
  margin: 0 12px;
  border: none;
  background-color: transparent;
  font-size: 16px;
`;

const defaultProps = {
  logo: '/public/greenpeace/gp-logo.svg',
  navbarItems: [
    {'Campañas': 'https://www.greenpeace.org/argentina/campanas/',},
    {'Participá': 'https://www.greenpeace.org/argentina/involucrate/',},
    {'Dona ahora': 'https://app.greenpeace.org.ar/coupon/regular/forms/registration?app=yaguarete&utm_source=web&utm_medium=openSpace&utm_content=banner_home&utm_term=todos&utm_campaign=Yaguarete',},
  ],
  IconSearch: '/public/greenpeace/icon-search.svg',
  inputPlaceholder: 'Buscar',
};

export interface params {
  logo?: string;
  navbarItems?: object[];
  IconSearch?: string;
  inputPlaceholder?: string;
};

const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params}
  return (
  <Container>
    <Logo src={params.logo} alt='Grenpeace' />
    <Navbar>
      <List>
        {
          params.navbarItems?.map( (navbarItem, index) => {
            const itemName = Object.keys(navbarItem).toString();
            const itemHref = Object.values(navbarItem).toString();
          return(           
            <Item key={index}>
              <Link href={itemHref} >{itemName}</Link>
            </Item>
          )})
        }
      </List>
    </Navbar>
    <Search>
      <Icon src={params.IconSearch} alt='icon' />
      <Input type="search" placeholder={params.inputPlaceholder} />
    </Search>
  </Container>
)};

export default App;
