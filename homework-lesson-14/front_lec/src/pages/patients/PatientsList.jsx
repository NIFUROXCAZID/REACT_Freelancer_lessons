import { useGetPatientsQuery } from '@/api/slices/patientApi'
import PatientCard from './PatientCard'
import { Link } from 'react-router'
import { useState} from "react";

function PatientsList() {
  const { data: patients = [], error, isLoading } = useGetPatientsQuery()

  const [search, setSearch] = useState("");

  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>Error...</div>

  const filteredPatients = patients.filter((patient) => patient.fullName.toLowerCase().includes(search.toLowerCase()));
  
  return (
    <div>
      <h1>Список пацієнтів</h1>
      <hr />
      <Link to="/patients/new">+ Додати пацієнта</Link>
      <hr />
      <input type="text" placeholder="Пошук по імені..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <hr />
      <table>
        <tbody>
          <tr>
            <th>Ім"я</th>
            <th>Дата народження</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {filteredPatients.map((patient) => (
            <PatientCard key={patient.id} patient={patient} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientsList
