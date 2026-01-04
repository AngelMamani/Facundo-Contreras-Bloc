import { Hero } from './components/Hero/Hero';
import { VideoEmbed } from './components/VideoEmbed/VideoEmbed';
import { TelegramSection } from './components/TelegramSection/TelegramSection';
import { VideoCarousel } from './components/VideoCarousel/VideoCarousel';
import { PhotoCarouselSection } from './components/PhotoCarouselSection/PhotoCarouselSection';
import { ChallengeSection } from './components/ChallengeSection/ChallengeSection';
import { VideoGrid } from './components/VideoGrid/VideoGrid';
import { Footer } from './components/Footer/Footer';
import privada1 from './assets/privada1.png';
import privada2 from './assets/privada2.png';
import privada3 from './assets/privada3.png';
import privada4 from './assets/privada4.png';
import privada5 from './assets/privada5.png';
import privada6 from './assets/privada6.png';
import privada7 from './assets/privada7.jpg';
import privada8 from './assets/privada8.jpg';
import privada9 from './assets/privada9.png';
import privada10 from './assets/privada10.png';
import privada11 from './assets/privada11.png';
import privada12 from './assets/privada12.png';
import privada13 from './assets/privada13.png';
import privada14 from './assets/privada14.png';
import privada15 from './assets/privada15.png';
import privada16 from './assets/privada16.png';
import privada17 from './assets/privada17.png';
import privada18 from './assets/privada18.png';
import './App.css';

function App() {
  const featuredVideos = [
    {
      id: 'Qjp3EV1w1VA',
      title: 'Comenzá el 2026 Operando CONMIGO en Opciones Binarias',
      thumbnail: '',
    },
    {
      id: '10DVf_2fV-c',
      title: 'Opero con Acción del Precio y RETIRO $2294 USD',
      thumbnail: '',
    },
    {
      id: 'ZrPEEa87C58',
      title: 'Táctica para GANAR en el OTC (99% efectiva)',
      thumbnail: '',
    },
  ];

  const allVideos = [
    { id: 'Qjp3EV1w1VA', title: 'Comenzá el 2026 Operando CONMIGO', thumbnail: '' },
    { id: '10DVf_2fV-c', title: 'Opero con Acción del Precio y RETIRO $2294 USD', thumbnail: '' },
    { id: 'ZrPEEa87C58', title: 'Táctica para GANAR en el OTC (99% efectiva)', thumbnail: '' },
    { id: 'oVCpCb0KuGk', title: 'Técnica para PREDECIR que va a HACER el Mercado', thumbnail: '' },
    { id: 'lqDKwqcSnPc', title: 'La ESTRATEGIA Del ZigZag NUNCA FALLA', thumbnail: '' },
    { id: 'OWqcf0OWz_I', title: 'Como hice +$1.500 USD con solo 4 Operaciones', thumbnail: '' },
    { id: 'DEULy0KASlY', title: 'Opera rechazos de ESTA FORMA y GANA SIEMPRE', thumbnail: '' },
    { id: 'KcLStCHc6fU', title: 'RETO: De $100 USD a $1.000 USD en 1 OPERATIVA', thumbnail: '' },
    { id: 'UFRC7xyHZAc', title: 'La MEJOR ESTRATEGIA para PRINCIPIANTES', thumbnail: '' },
    { id: '87dVNpQyXJs', title: 'Aplica acción del precio DE ESTA FORMA', thumbnail: '' },
    { id: '_QKnKtn1sK8', title: 'Elimina estos 2 ERRORES para SER RENTABLE', thumbnail: '' },
    { id: 'm3FDzMi3Vzw', title: 'Técnica para CAPITALIZAR RAPIDO una CUENTA CHICA', thumbnail: '' },
    { id: 'WOh9UOqhBpg', title: 'Gano $3036 USD en 1 hora en Opciones Binarias', thumbnail: '' },
    { id: 'pvc4xJ1aheU', title: 'El Indicador MAS FACIL y EFECTIVO', thumbnail: '' },
    { id: 'fKfDIDbaZBw', title: '3 TRUCOS para ANALIZAR el Mercado', thumbnail: '' },
    { id: 'spDdklN4KSM', title: 'Utiliza el ZigZag y GANA SIEMPRE en OTC', thumbnail: '' },
  ];

  const photosRow1 = [privada1, privada2, privada3, privada4, privada5, privada6];
  const photosRow2 = [privada7, privada8, privada9, privada10, privada11, privada12];
  const photosRow3 = [privada13, privada14, privada15, privada16, privada17, privada18];

  return (
    <div className="app">
      <Hero />
      
      <VideoEmbed
        videoId="KW-rPKMhccU"
        title="Video Especial - 10K Suscriptores"
      />

      <TelegramSection />

      <VideoCarousel
        videos={featuredVideos}
        title="Videos Destacados"
      />

      <PhotoCarouselSection
        photos={photosRow1}
        direction="left"
        title="Operaciones Exitosas del Grupo Privado"
      />
      <PhotoCarouselSection photos={photosRow2} direction="right" />
      <PhotoCarouselSection photos={photosRow3} direction="left" />

      <ChallengeSection />

      <VideoGrid videos={allVideos} title="Todos los Videos del Canal" />

      <Footer />
    </div>
  );
}

export default App;
