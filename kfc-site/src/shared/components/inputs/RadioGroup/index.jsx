const RadioGroup = ({ name, options = [], value, onChange, error }) => {
  return (
    <>
      <div>
        {options.map((o) => (
          <input key={o.value} type="radio"
              name={name}
              value={o.value}
              checked={String(value) === String(o.value)}
              onChange={(e) => onChange(e.target.value)}
            />
        ))}
      </div>
      {error && (
        <p className='defaultForm__errorYup'>
          {error}
        </p>
      )}
    </>
  )
}

export default RadioGroup
