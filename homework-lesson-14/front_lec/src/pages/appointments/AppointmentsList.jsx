import { useGetAppointmentsQuery } from "@/api/slices/appointmentApi";
import AppointmentsElement from "./AppointmentsElement";
import { Link } from "react-router";
import { useState } from "react";

function AppointmentsList() {
  const { data: appointments = [], error, isLoading } = useGetAppointmentsQuery();

  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error...</div>;

  const filteredAppointments = appointments.filter((appointment) =>
    appointment.reason.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Список призначень</h1>
      <hr />
      <Link to="/appointments/new">+ Додати призначення</Link>
      <hr />
      <input type="text" placeholder="Пошук по причині..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Ім"я лікаря</th>
            <th>Ім"я паціента</th>
            <th>Дата</th>
            <th>Причина</th>
            <th>Статус</th>
          </tr>
          {filteredAppointments.map((appointment) => (
            <AppointmentsElement key={appointment.id} appointment={appointment} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsList;

  // {
  //   "id": "a018",
  //   "patientId": "p018",
  //   "doctorId": "d001",
  //   "date": "2025-08-08T13:00:00Z",
  //   "reason": "Кашель",
  //   "status": "scheduled"
  // },
