import { useDeletePatientMutation } from "@/api/slices/patientApi";
import { useNavigate } from "react-router";

function PatientCard({ patient }) {
    const navigate = useNavigate();
  const [deletePatient, { isLoading }] = useDeletePatientMutation()

  return (
    <tr>
      <td>{patient.fullName}</td>
      <td>{patient.birthDate}</td>
      <td>{patient.phone}</td>
      <td>{patient.email}</td>
      <td>
        <span onClick={() => deletePatient(patient.id)}>🗑️</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => navigate(`/patients/${patient.id}`)}>✏️</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => navigate(`/patients/${patient.id}/details`)}>🔍</span>
      </td>
    </tr>
  );
}

export default PatientCard

//   {
//     "id": "p014",
//     "fullName": "Юрій Мельник",
//     "birthDate": "1969-10-10",
//     "gender": "male",
//     "phone": "+380671111222",
//     "email": "melnyk.yura@gmail.com",
//     "address": "м. Рівне, вул. Київська, 17",
//     "notes": ""
//   },