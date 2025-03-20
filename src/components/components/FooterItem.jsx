import PropTypes from 'prop-types';

function FooterItem({ children }) {
  return <li className="nav-item">{children}</li>;
}

FooterItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterItem;
