const Select = ({ error, multiple, options = [], ...rest }) => {
  return (
    <>
      <select {...rest} multiple={!!multiple}>
        {!multiple && <option value="">— Оберіть —</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default Select
