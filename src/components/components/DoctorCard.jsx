import PropTypes from 'prop-types';
import { useContext } from 'react';
import { DoctorsContext } from '../../store/DoctorsContext';
import Image from './Image';
import Button from './Button';
import Container from './Container';

function DoctorCard({ img, name, specialty, experience, description }) {
  const { setDoctor, setShowModalDoctor } = useContext(DoctorsContext);

  return (
    <Container className="col-md-3 mb-5">
      <Container className="card text-center">
        <Image src={img} className="card-img-top" alt="..." />

        <Container className="card-body">
          <h3 className="card-title">{name}</h3>
          <h5>{specialty}</h5>
          <p className="card-text">
            {description}
            <br />
            <strong>Experiencia:</strong> {experience} años
          </p>
          <Button
            className="btn btn-primary"
            onClick={() => {
              setDoctor({ name, specialty, experience, description });

              setShowModalDoctor(true);
            }}
          >
            Ver Info
          </Button>
        </Container>
      </Container>
    </Container>
  );
}

DoctorCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specialty: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default DoctorCard;
