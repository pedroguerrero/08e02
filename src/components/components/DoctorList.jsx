import PropTypes from 'prop-types';
import Row from './Row';
import DoctorCard from './DoctorCard';

function DoctorList({ doctors }) {
  return (
    <Row>
      {doctors.map((doctor) => (
        <DoctorCard key={doctor.id} {...doctor} />
      ))}
    </Row>
  );
}

DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      specialty: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      experience: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DoctorList;
