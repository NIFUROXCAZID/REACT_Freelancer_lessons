import { useCreateDoctorMutation, useUpdateDoctorMutation, useGetDoctorByIdQuery } from "@/api/slices/doctorApi";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

const emptyDoctorData = {
  fullName: "",
  specialty: "",
  email: "",
  phone: "",
  room: "",
  notes: "",
};

function DoctorsForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);

  const { data: doctor, isLoading } = useGetDoctorByIdQuery(id, {
    skip: !isEdit,
  });

  const [dataForm, setDataForm] = useState({ ...emptyDoctorData });
  const [createDoctor] = useCreateDoctorMutation();
  const [updateDoctor] = useUpdateDoctorMutation();

  useEffect(() => {
    if (doctor) {
      setDataForm({
        fullName: doctor.fullName || "",
        specialty: doctor.specialty || "",
        email: doctor.email || "",
        phone: doctor.phone || "",
        room: doctor.room || "",
        notes: doctor.notes || "",
      });
    }
  }, [doctor]);

  const handleChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEdit) {
        await updateDoctor({ id, ...dataForm });
      } else {
        await createDoctor(dataForm);
      }

      navigate("/doctors");
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
            Full name:
            <input type="text" name="fullName" value={dataForm.fullName} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Specialty:
            <input type="text" name="specialty" value={dataForm.specialty} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input type="text" name="phone" value={dataForm.phone} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={dataForm.email} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Room:
            <input type="text" name="room" value={dataForm.room} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label>
            Notes:
            <input type="text" name="notes" value={dataForm.notes} onChange={handleChange} />
          </label>
        </div>
        <button type="submit">{buttonLabel}</button>
      </form>
    </div>
  );
}

export default DoctorsForm;

  // {
  //   "id": "d002",
  //   "fullName": "Микола Сидоренко",
  //   "specialty": "Кардіолог",
  //   "email": "mykola.syd@med.com",
  //   "phone": "+380631234567",
  //   "room": "202",
  //   "notes": "Кардіоогляд по понеділках"
  // },
