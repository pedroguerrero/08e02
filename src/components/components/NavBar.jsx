import PropTypes from 'prop-types';

function NavBar({ children }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">{children}</nav>
  );
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;
