import PropTypes from 'prop-types';

function Container({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
