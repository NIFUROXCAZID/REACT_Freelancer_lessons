import { useDeleteAppointmentMutation, useUpdateAppointmentMutation } from "@/api/slices/appointmentApi";
import { useGetDoctorByIdQuery } from "@/api/slices/doctorApi";
import { useGetPatientByIdQuery } from "@/api/slices/patientApi";
import { useNavigate } from "react-router";

function AppointmentsElement({ appointment }) {
  const [updateAppointment, { isUpdateLoading }] = useUpdateAppointmentMutation();

  const {
    data: patientData,
    isLoading: patientIsLoading,
    error: patientError,
  } = useGetPatientByIdQuery(appointment.patientId, {
    skip: !appointment.patientId,
  });

  const {
    data: doctorData,
    isLoading: doctorIsLoading,
    error: doctorError,
  } = useGetDoctorByIdQuery(appointment.doctorId, {
    skip: !appointment.doctorId,
  });

  const navigate = useNavigate();
  const [deleteAppointment, { isLoading }] = useDeleteAppointmentMutation();

  const changeStatus = async (newStatus) => {
    try {
      await updateAppointment({ id: appointment.id, status: newStatus });
    } catch (error) {
      console.error("Помилка оновлення:", error);
    }
  };

  const renderCell = (isLoading, error, value) => {
    if (isLoading) return "...";
    if (error) return "Помилка завантаження";
    return value || "-";
  };

  return (
    <tr>
      <td>{renderCell(doctorIsLoading, doctorError, doctorData?.fullName)}</td>
      <td>{renderCell(patientIsLoading, patientError, patientData?.fullName)}</td>
      <td>{appointment.date}</td>
      <td>{appointment.reason}</td>
      <td>{appointment.status}</td>
      <td>
        <span onClick={() => changeStatus("active")}>🩺</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => changeStatus("completed")}>✅</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => changeStatus("cancelled")}>❌</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => deleteAppointment(appointment.id)}>🗑️</span>
        {isLoading && <span>...</span>}
      </td>
      <td>
        <span onClick={() => navigate(`/appointments/${appointment.id}`)}>✏️</span>
        {isLoading && <span>...</span>}
      </td>
    </tr>
  );
}

export default AppointmentsElement;

// {
//   "id": "a018",
//   "patientId": "p018",
//   "doctorId": "d001",
//   "date": "2025-08-08T13:00:00Z",
//   "reason": "Кашель",
//   "status": "scheduled"
// },
