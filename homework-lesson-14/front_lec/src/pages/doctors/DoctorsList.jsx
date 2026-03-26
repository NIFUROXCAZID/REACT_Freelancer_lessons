import { useGetDoctorsQuery } from "@/api/slices/doctorApi";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router";
import { useState } from "react";

function DoctorsList() {
  const { data: doctors = [], error, isLoading } = useGetDoctorsQuery();

  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading ...</div>;
  if (error) return <div>Error...</div>;

  const filteredDoctors = doctors.filter((doctor) => doctor.fullName.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Список лікарів</h1>
      <hr />
      <Link to="/doctors/new">+ Додати лікаря</Link>
      <hr />
      <input type="text" placeholder="Пошук по імені..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Ім"я</th>
            <th>Спеціальність</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Кабінет</th>
            <th>Actions</th>
          </tr>
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DoctorsList;
