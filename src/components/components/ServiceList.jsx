import PropTypes from 'prop-types';
import Row from './Row';
import ServiceItem from './ServiceItem';

function ServiceList({ services }) {
  return (
    <Row>
      {services.map((service, index) => (
        <ServiceItem key={index} {...service} />
      ))}
    </Row>
  );
}

ServiceList.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
};

export default ServiceList;
