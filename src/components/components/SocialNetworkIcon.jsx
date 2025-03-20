import PropTypes from 'prop-types';

function SocialNetworkIcon({ icon, ...props }) {
  return (
    <li {...props}>
      <a
        className="text-body-secondary"
        target="_blank"
        href="#"
        aria-label={icon}
      >
        <i className={`bi bi-${icon}`}></i>
      </a>
    </li>
  );
}

SocialNetworkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SocialNetworkIcon;
