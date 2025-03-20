import PropTypes from 'prop-types';

function Row({ children }) {
  return <div className="row">{children}</div>;
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
