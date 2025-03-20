import docImg from '../../assets/doc-1.png';

export const getDoctors = async () => {
  const specialties = ['Pediatría', 'Cardiología', 'Cirugía', 'Traumatología'];
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Error al obtener los medicos');
  }

  const data = await response.json();

  return data.map(({ id, name }) => ({
    id,
    name,
    specialty: specialties[Math.floor(Math.random() * specialties.length)],
    img: docImg,
    experience: Math.floor(Math.random() * 10) + 1,
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
  }));
};
