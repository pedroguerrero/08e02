import PropTypes from 'prop-types';
import Container from './Container';

function Loading({ text, size }) {
  return (
    <Container className="text-center">
      <Container
        className="spinner-border text-primary"
        role="status"
        style={{ width: size, height: size }}
      >
        <span className="visually-hidden">{text}</span>
      </Container>
    </Container>
  );
}

Loading.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
};

export default Loading;
