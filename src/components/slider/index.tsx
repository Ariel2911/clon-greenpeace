import styled from 'styled-components';

const Container = styled.div`
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 604px;
  
`;

const defaultProps = {
  data: [
    {
      img: '/public/greenpeace/slider1.webp',
      title: 'Los últimos 20',
      paragraph: 'Los desmontes están destruyendo el hogar de los yaguaretés. Juntos podemos frenarlos y salvar a la especie en el Gran Chaco.',
      link: 'Leé mas y doná',
      href:'https://www.greenpeace.org/argentina/involucrate/deforestacion-cero-en-el-norte-de-argentina/yaguaretes-al-borde-de-la-extincion/'
    },
    {
      img: '/public/greenpeace/slider2.webp',
      title: '"Por acá, no!"',
      paragraph: 'Sumate al Chino Darín, Natalie Pérez y Diego Poggi viendo el primer documental para proteger al Mar Argentino en nuestro canal de YouTube',
      link: 'Miralo acá',
      href:'https://www.youtube.com/watch?v=hdPoEBDMzhI'
    },
    {
      img: '/public/greenpeace/slider3.webp',
      title: 'Protegé el Mar Argentino',
      paragraph: 'La industria petrolera y la pesca sin control amenazan el hogar de la ballena franca austral y otras especies en el Mar Argentino. Sumate para defenderlas',
      link: 'Firmá la petición',
      href:'https://landing.infogreenpeace.org/es-ar/offshore'
    },
  ],
};

interface Data {
  img: string
  title: string
  paragraph: string
  link: string
  href: string
}

export interface params {
  data?: Data[];
};

const App = (params: params): JSX.Element => {
  params = { ...defaultProps, ...params};

  const info = params.data?.find((_, index) => index === 0 )

  return (
  <Container>
    <button>
      <img src='/public/greenpeace/chevron.svg' />
    </button>
    <img src={info?.img} />
    <h2>{info?.title}</h2>
    <p>{info?.paragraph}</p>
    <a href={info?.href}>{info?.link}</a>
    <button>
      <img src='/public/greenpeace/chevron.svg' />
    </button>
  </Container>
)};

export default App;
