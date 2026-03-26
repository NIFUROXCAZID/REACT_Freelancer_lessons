import { useNavigate, useParams } from "react-router";
import { useGetPatientByIdQuery } from "@/api/slices/patientApi";

function PatientDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: patient, isLoading, error } = useGetPatientByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!patient) return <div>Not found</div>;
  return (
    <div>
      <h1>Детальні дані паціента:</h1>
      <p>
        <strong>ID паціента: </strong>
        {patient.id}
      </p>
      <p>
        <strong>ПІБ паціента: </strong>
        {patient.fullName}
      </p>
      <p>
        <strong>Дата народження: </strong>
        {patient.birthDate}
      </p>
      <p>
        <strong>Гендер: </strong>
        {patient.gender}
      </p>
      <p>
        <strong>Телефон: </strong>
        {patient.phone}
      </p>
      <p>
        <strong>Імейл: </strong>
        {patient.email}
      </p>
      <p>
        <strong>Адреса: </strong>
        {patient.address}
      </p>
      <p>
        <strong>Примітки: </strong>
        {patient.notes}
      </p>
      <button onClick={() => navigate("/patients")}>До списку паціентів</button>
    </div>
  );
}

export default PatientDetails;

