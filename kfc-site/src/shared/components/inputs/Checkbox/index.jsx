const Checkbox = ({checked, onChange, error }) => {
  return (
    <>
      <input type="checkbox" checked={!!checked} onChange={(e) => onChange(e.target.checked)}/>
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default Checkbox
