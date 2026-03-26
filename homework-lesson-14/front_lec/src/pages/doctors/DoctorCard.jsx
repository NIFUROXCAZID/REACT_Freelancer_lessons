import { useDeleteDoctorMutation } from "@/api/slices/doctorApi";
import { useNavigate } from "react-router";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  const [deleteDoctor, { isLoading }] = useDeleteDoctorMutation();

  return (
    <tr>
      <td>{doctor.fullName}</td>
      <td>{doctor.specialty}</td>
      <td>{doctor.phone}</td>
      <td>{doctor.email}</td>
      <td>{doctor.room}</td>
      <td>
        <span onClick={() => deleteDoctor(doctor.id)}>🗑️</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => navigate(`/doctors/${doctor.id}`)}>✏️</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => navigate(`/doctors/${doctor.id}/details`)}>🔍</span>
      </td>
    </tr>
  );
}

export default DoctorCard;

  // {
  //   "id": "d002",
  //   "fullName": "Микола Сидоренко",
  //   "specialty": "Кардіолог",
  //   "email": "mykola.syd@med.com",
  //   "phone": "+380631234567",
  //   "room": "202",
  //   "notes": "Кардіоогляд по понеділках"
  // },

