import { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Container from './Container';

function AppointmentForm({ setPatientAttribute, patient, doctors, onSubmit }) {
  const refs = {
    name: useRef(null),
    date: useRef(null),
    doctor: useRef(null),
    price: useRef(null),
  };

  const focus = (name) => {
    name in refs && refs[name].current.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <Container className="mb-3">
        <label className="form-label" onClick={() => focus('name')}>
          Nombre
        </label>
        <input
          className="form-control"
          placeholder="Nombre"
          onChange={(event) => setPatientAttribute('name', event.target.value)}
          ref={refs.name}
          value={patient.name}
        />
      </Container>

      <Container className="mb-3">
        <label className="form-label" onClick={() => focus('date')}>
          Fecha
        </label>
        <input
          ref={refs.date}
          className="form-control"
          placeholder="Fecha"
          type="date"
          onChange={(event) => setPatientAttribute('date', event.target.value)}
          value={patient.date}
        />
      </Container>

      <Container className="mb-3">
        <label className="form-label" onClick={() => focus('doctor')}>
          Doctor
        </label>
        <select
          ref={refs.doctor}
          value={patient.doctorId}
          className="form-select"
          onChange={(event) => {
            const doctorId = Number(event.target.value);
            const { name } = doctors.find((doctor) => doctor.id === doctorId);
            setPatientAttribute('doctor', name);
            setPatientAttribute('doctorId', doctorId);
          }}
        >
          <option value="0" disabled={true}>
            Seleccione un medico
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </Container>

      <Container className="mb-3">
        <label className="form-label" onClick={() => focus('price')}>
          Valor Consulta
        </label>
        <input
          ref={refs.price}
          className="form-control"
          placeholder="10000"
          type="number"
          onChange={(event) =>
            setPatientAttribute('price', Number(event.target.value))
          }
          value={patient.price}
        />
      </Container>

      <Container className="mb-3 text-end">
        <Button type="submit" className="btn btn-primary">
          Guardar
        </Button>
      </Container>
    </form>
  );
}

AppointmentForm.propTypes = {
  setPatientAttribute: PropTypes.func.isRequired,
  patient: PropTypes.object.isRequired,
  doctors: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
