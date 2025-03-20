import service1 from '../../assets/service-1.png';
import service2 from '../../assets/service-2.png';
import service3 from '../../assets/service-3.png';

export const getServices = () => {
  return [
    {
      name: 'Consultas',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
      img: service1,
    },
    {
      name: 'Urgencias',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
      img: service2,
    },
    {
      name: 'Especialidades',
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
      img: service3,
    },
  ];
};
