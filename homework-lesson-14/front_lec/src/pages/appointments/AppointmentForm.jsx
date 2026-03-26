import { useGetAppointmentByIdQuery, useCreateAppointmentMutation, useUpdateAppointmentMutation,} from "@/api/slices/appointmentApi";
import { useGetDoctorsQuery } from "@/api/slices/doctorApi";
import { useGetPatientsQuery } from "@/api/slices/patientApi";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const emptyAppointmentData = {
  patientId: "",
  doctorId: "",
  date: "",
  reason: "",
  status: "scheduled",
};

function AppointmentForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const { data: appointment, isLoading } = useGetAppointmentByIdQuery(id, {
    skip: !isEdit,
  });

  const { data: doctors = [], error: doctorsError, isLoading: isDoctorsLoading } = useGetDoctorsQuery();
  const { data: patients = [], error: patientsError, isLoading: isPatientsLoading } = useGetPatientsQuery();

  const [dataForm, setDataForm] = useState({ ...emptyAppointmentData });
  const [createAppointment] = useCreateAppointmentMutation();
  const [updateAppointment] = useUpdateAppointmentMutation();

  useEffect(() => {
    if (appointment) {
      setDataForm({
        patientId: appointment.patientId || "",
        doctorId: appointment.doctorId || "",
        date: appointment.date || "",
        reason: appointment.reason || "",
        status: appointment.status || "scheduled",
      });
    }
  }, [appointment]);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateAppointment({ id, ...dataForm });
      } else {
        await createAppointment(dataForm);
      }

      navigate("/appointments");
    } catch (error) {
      console.error("Помилка при збереженні:", error);
    }
  };

  const buttonLabel = id ? "Зберегти" : "Додати";
  if (isEdit && isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Оберіть лікаря :
            <select name="doctorId" value={dataForm.doctorId} onChange={handleChange}>
              <option value="">Оберіть лікаря</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.fullName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Оберіть паціента :
            <select name="patientId" value={dataForm.patientId} onChange={handleChange}>
              <option value="">Оберіть паціента</option>
              {patients.map((patient) => (
                <option key={patient.id} value={patient.id}>
                  {patient.fullName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            Оберіть статус :
            <select name="status" value={dataForm.status} onChange={handleChange}>
              <option value="">Оберіть статус</option>
              <option value="scheduled">Назначено</option>
              <option value="active">Активно</option>
              <option value="cancelled">Відмовлено</option>
              <option value="completed">Завершено</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Оберіть дату :
            <input
              type="datetime-local"
              name="date"
              value={dataForm.date ? dataForm.date.slice(0, 16) : ""}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Опишіть причину :
            <input type="text" name="reason" value={dataForm.reason} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
}

export default AppointmentForm;

// {
//   "id": "a018",
//   "patientId": "p018",
//   "doctorId": "d001",
//   "date": "2025-08-08T13:00:00Z",
//   "reason": "Кашель",
//   "status": "scheduled"
// },