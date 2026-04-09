const RadioGroup = ({ label, name, options = [], value, onChange, error }) => {
  return (
    <div style={{ marginBottom: 14 }}>
      {label && <div style={{ marginBottom: 6 }}>{label}</div>}
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {options.map((o) => (
          <label
            key={o.value}
            style={{ display: 'flex', alignItems: 'center', gap: 6 }}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={String(value) === String(o.value)}
              onChange={(e) => onChange(e.target.value)}
            />
            {o.label}
          </label>
        ))}
      </div>
      {error && (
        <div style={{ fontSize: 12, color: '#e11d48', marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  )
}

export default RadioGroup
