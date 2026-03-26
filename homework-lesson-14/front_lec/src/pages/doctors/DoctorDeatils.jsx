import { useNavigate, useParams } from "react-router";
import { useGetDoctorByIdQuery } from "@/api/slices/doctorApi";

function DoctorDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: doctor, isLoading, error } = useGetDoctorByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  if (!doctor) return <div>Not found</div>;
  return (
    <div>
      <h1>Детальні дані лікаря:</h1>
      <p>
        <strong>ID лікаря: </strong>
        {doctor.id}
      </p>
      <p>
        <strong>ПІБ лікаря: </strong>
        {doctor.fullName}
      </p>
      <p>
        <strong>Спеціальність: </strong>
        {doctor.specialty}
      </p>
      <p>
        <strong>Телефон: </strong>
        {doctor.phone}
      </p>
      <p>
        <strong>Імейл: </strong>
        {doctor.email}
      </p>
      <p>
        <strong>Кабінет: </strong>
        {doctor.room}
      </p>
      <p>
        <strong>Примітки: </strong>
        {doctor.notes}
      </p>
      <button onClick={() => navigate("/doctors")}>До списку лікарів</button>
    </div>
  );
}

export default DoctorDetails;

  // {
  //   "id": "d002",
  //   "fullName": "Микола Сидоренко",
  //   "specialty": "Кардіолог",
  //   "email": "mykola.syd@med.com",
  //   "phone": "+380631234567",
  //   "room": "202",
  //   "notes": "Кардіоогляд по понеділках"
  // },