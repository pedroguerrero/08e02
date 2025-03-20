import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router';
import hospitalSvg from './assets/hospital-icon.svg';
import { navPages } from './components/utils/nav';
import Image from './components/components/Image';
import Header from './components/components/Header';
import NavBar from './components/components/NavBar';
import Footer from './components/components/Footer';
import Button from './components/components/Button';
import { DoctorsContext } from './store/DoctorsContext';
import Container from './components/components/Container';

function App() {
  const [showNav, setShowNav] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem('username') || 'Pedro Guerrero'
  );

  return (
    <>
      <Header>
        <NavBar>
          <Container className="container-fluid">
            <Button
              className="navbar-toggler"
              type="button"
              aria-controls="nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNav((s) => !s)}
            >
              <span className="navbar-toggler-icon"></span>
            </Button>

            <Container
              className={`collapse navbar-collapse ${showNav && 'show'}`}
              id="nav"
            >
              <NavLink
                to="/"
                className="navbar-brand d-flex align-items-center"
              >
                <Image src={hospitalSvg} alt="" height="40" className="me-2" />
                VidaPlena
              </NavLink>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {navPages.map(({ path, name }) => (
                  <li key={path} className="nav-item">
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <span>{userName}</span>

              <Button
                className="btn btn-secondary"
                onClick={() => {
                  const user = `Usuario ${Math.floor(Math.random() * 1000)}`;
                  setUserName(user);
                  localStorage.setItem('username', user);
                }}
              >
                Cambiar Nombre
              </Button>
            </Container>
          </Container>
        </NavBar>
      </Header>

      <DoctorsContext.Provider
        value={{
          doctors,
          setDoctors,
          doctor,
          setDoctor,
          showModalDoctor,
          setShowModalDoctor,
        }}
      >
        <Routes>
          {navPages.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </DoctorsContext.Provider>

      <Footer />
    </>
  );
}

export default App;
