import PropTypes from 'prop-types';
import Image from './Image';
import Container from './Container';

function ServiceItem({ name, description, img }) {
  return (
    <Container className="col-md-4 mb-5">
      <Container className="card text-center">
        <Image src={img} className="card-img-top" alt="" />

        <Container className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{description}</p>
        </Container>
      </Container>
    </Container>
  );
}

ServiceItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServiceItem;
