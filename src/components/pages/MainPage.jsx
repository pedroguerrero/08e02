import background from '../../assets/bg.jpg';
import { getServices } from '../utils/services';
import { getPatients } from '../utils/patients';
import Row from '../components/Row';
import Image from '../components/Image';
import Container from '../components/Container';
import ServiceList from '../components/ServiceList';

export default function MainPage() {
  const patients = getPatients();
  const services = getServices();

  return (
    <main>
      <section
        className="welcome-section"
        style={{
          padding: '200px',
          background: `url(${background}) no-repeat`,
          backgroundSize: 'cover',
        }}
      >
        <Container className="container text-center">
          <Row>
            <Container className="col">
              <h1>¡Bienvenido al Hospital VidaPlena!</h1>
              <p className="fs-4">
                Estamos aquí para cuidarte con calidez y profesionalismo.
                Nuestro compromiso es brindarte atención médica de calidad y
                apoyo en cada paso de tu recuperación. Tu salud es nuestra
                prioridad. ¡Cuenta con nosotros!
              </p>
            </Container>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="container mb-3">
          <Row>
            <Container className="col text-center mt-5 mb-5">
              <h2>Servicios</h2>
            </Container>
          </Row>

          <ServiceList services={services} />
        </Container>
      </section>

      <section>
        <Container className="container">
          <Row>
            <Container className="col text-center mb-5">
              <h2>Testimonios de pacientes</h2>
            </Container>
          </Row>

          <Row>
            {patients.map(({ name, img, description }, index) => (
              <Container className="col-md-4 mb-5" key={index}>
                <Container className="card text-center">
                  <Image src={img} className="card-img-top" alt="" />
                  <Container className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                  </Container>
                </Container>
              </Container>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}
