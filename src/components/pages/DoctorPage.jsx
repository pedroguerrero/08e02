import React, { useState, useEffect, useContext, Profiler } from 'react';
import background from '../../assets/bg-2.jpg';
import { getDoctors } from '../utils/doctor';
import Row from '../components/Row';
import Loading from '../components/Loading';
import Container from '../components/Container';
import DoctorList from '../components/DoctorList';
import DoctorModal from '../components/DoctorModal';
import { DoctorsContext } from '../../store/DoctorsContext';

export default function DoctorPage() {
  const [isLoading, setIsLoading] = useState(true);
  const { doctors, setDoctors, showModalDoctor, setShowModalDoctor } =
    useContext(DoctorsContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const onRenderCallback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime
  ) => {
    console.log(
      'profiler',
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime
    );
  };

  const filterBySpec = (specialty) => {
    specialty = specialty
      .toLowerCase()
      .replaceAll('á', 'a')
      .replaceAll('é', 'e')
      .replaceAll('í', 'i')
      .replaceAll('ó', 'o')
      .replaceAll('ú', 'u');
    const filteredDoctors = doctors.filter((doctor) =>
      doctor.specialty
        .toLowerCase()
        .replaceAll('á', 'a')
        .replaceAll('é', 'e')
        .replaceAll('í', 'i')
        .replaceAll('ó', 'o')
        .replaceAll('ú', 'u')
        .includes(specialty)
    );

    setFilteredDoctors(filteredDoctors);

    return filteredDoctors;
  };

  useEffect(() => {
    if (doctors.length) {
      setFilteredDoctors(doctors);
      setIsLoading(false);
      return;
    }

    getDoctors()
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
        setIsLoading(false);
      })
      .catch(() => alert('Error al obtener los medicos'));
  }, [doctors.length, setDoctors, doctors]);

  return (
    <React.Fragment>
      <DoctorModal
        title="Información del Doctor"
        showModal={showModalDoctor}
        setShowModal={setShowModalDoctor}
      />
      <main>
        <section
          className="medical-team-section"
          style={{
            padding: '200px',
            background: `url(${background}) no-repeat`,
            backgroundSize: 'cover',
          }}
        >
          <Container className="container text-center">
            <Row>
              <Container className="col">
                <h1>Equipo médico</h1>
                <p className="fs-4">
                  Conoce a nuestro equipo médico, un grupo de profesionales
                  altamente capacitados y dedicados a tu bienestar. Cada miembro
                  aporta experiencia, compromiso y un enfoque humano para
                  brindarte la mejor atención posible. Estamos aquí para cuidar
                  de ti en cada paso del camino hacia la recuperación.
                </p>
              </Container>
            </Row>
          </Container>
        </section>

        <section>
          <Container className="container">
            <Row>
              <Container className="col text-center mt-5 mb-5">
                <h2>Equipo médico</h2>
              </Container>
            </Row>

            <Row>
              <Container className="col-md-4 offset-md-8 text-end">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Buscar por especialidad"
                  onChange={(e) => filterBySpec(e.target.value)}
                />
              </Container>
            </Row>

            <Profiler id="DoctorList" onRender={onRenderCallback}>
              {isLoading ? (
                <Loading size="5rem" />
              ) : (
                <DoctorList className="mt-5" doctors={filteredDoctors} />
              )}
            </Profiler>
          </Container>
        </section>
      </main>
    </React.Fragment>
  );
}
