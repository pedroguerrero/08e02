import MainPage from '../pages/MainPage';
import DoctorPage from '../pages/DoctorPage';
import ContactPage from '../pages/ContactPage';
import PatientsPage from '../pages/PatientsPage';

export const navPages = [
  {
    path: '/',
    name: 'Inicio',
    component: <MainPage />,
  },
  {
    path: '/equipo-medico',
    name: 'Equipo Médico',
    component: <DoctorPage />,
  },
  {
    path: '/citas-pacientes',
    name: 'Citas Paciente',
    component: <PatientsPage />,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: <ContactPage />,
  },
];
