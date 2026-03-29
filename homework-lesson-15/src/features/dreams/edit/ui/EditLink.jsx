import { NavLink } from 'react-router'

function EditLink({ id }) {
  return <NavLink to={`/dream/${id}/edit`}>Edit</NavLink>
}

export default EditLink
