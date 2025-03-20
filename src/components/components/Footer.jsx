import { NavLink } from 'react-router';
import { navPages } from '../utils/nav';
import FooterItem from './FooterItem';
import SocialNetworkIcon from './SocialNetworkIcon';

function Footer() {
  return (
    <footer>
      <ul className="nav justify-content-center border-bottom mb-3 mt-5">
        {navPages.map(({ path, name }) => (
          <FooterItem key={path}>
            <NavLink to={path} className="nav-link px-2 text-body-secondary">
              {name}
            </NavLink>
          </FooterItem>
        ))}
      </ul>

      <ul className="nav justify-content-center list-unstyled p-3 d-flex">
        <SocialNetworkIcon className="fs-4" icon="twitter" />
        <SocialNetworkIcon className="ms-3 fs-4" icon="instagram" />
        <SocialNetworkIcon className="ms-3 fs-4" icon="facebook" />
      </ul>

      <p className="text-center text-body-secondary">© 2024 VidaPlena</p>
    </footer>
  );
}

export default Footer;
