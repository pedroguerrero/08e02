import patient1 from '../../assets/patient-1.png';
import patient2 from '../../assets/patient-2.png';
import patient3 from '../../assets/patient-3.png';

export const getPatients = () => {
  return [
    {
      name: 'Card Title',
      img: patient1,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      name: 'Pedro Guerrero',
      img: patient3,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    {
      name: 'Card Title',
      img: patient2,
      description:
        'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
  ];
};
