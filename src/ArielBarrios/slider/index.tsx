import { useState,useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Roboto, sans-serif;
  position: relative;
  width: 100vw;
  height: 42vw;
  max-height: 620px;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  `;
const ButtonPrev = styled(Button)`
  transform: translateY(-50%) rotate(180deg);
  left: -12px;
  `;
const ButtonNext = styled(Button)`
  right: -12px;
  transform: translateY(-50%);
  `;
const Arrow = styled.img`
  width: 28px;
  height: 46px;
  margin: 24px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ContainerText = styled.div`
  position: absolute;
  bottom: 35%;
  left: 11vW;
  width: 580px;
  color: white;
`;
const Title = styled.h2`
  font-size: 48px;  
`;
const Paragraph = styled.p`
  font-size: 18px;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;
  padding: 0 30px;
  border-radius: 4px;
  background-color: #f36b35;
  font-size: 16px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  `;
const ContainerSliderButton = styled.div`
  position: absolute;
  bottom: 12px;
  left: 11vW;
`;
const SliderButton = styled.button`
  width: 40px;
  height: 3px;
  margin: 0 3px;
  background-color: #fff;
  border: none;
  cursor: pointer;
`;

interface Data {
  img: string;
  title: string;
  paragraph: string;
  link: string;
  href: string;
}

export interface params {
  data: Data[];
};

const App = (params: params): JSX.Element => {

  const [sliderPosition, setSliderPosition] = useState(0);
  const info = params.data[sliderPosition];
  
  const nextImage = () => {
    sliderPosition > params.data.length-2 ? setSliderPosition(0) : setSliderPosition(position => position + 1);   
  };
  const prevImage = () => {
    sliderPosition < 1 ? setSliderPosition(params.data.length-1) : setSliderPosition(position => position - 1);    
  };
  const selectImage = (index: number) => setSliderPosition(index);  

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      nextImage();
    }, 6000);
  
    return () => clearInterval(sliderInterval);
  }, [sliderPosition]);

  return (
  <Container>
    <ButtonPrev onClick={prevImage}>
      <Arrow src='/public/greenpeace/chevron.svg' />
    </ButtonPrev>
    <Img src={info?.img} />
    <ContainerText>
      <Title>{info?.title}</Title>
      <Paragraph>{info?.paragraph}</Paragraph>
      <Link href={info?.href}>{info?.link}</Link>
    </ContainerText>
    <ButtonNext onClick={nextImage}>
      <Arrow src='/public/greenpeace/chevron.svg' />
    </ButtonNext>
    <ContainerSliderButton>
      {
        params.data.map( (_, index) => <SliderButton key={index} onClick={() => selectImage(index) } />)
      }
    </ContainerSliderButton>
  </Container>
)};

App.defaultProps = {
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

export default App;
