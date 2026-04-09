const Checkbox = ({ label, checked, onChange, error }) => {
  return (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input
          type="checkbox"
          checked={!!checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
      {error && (
        <div style={{ fontSize: 12, color: '#e11d48', marginTop: 4 }}>
          {error}
        </div>
      )}
    </div>
  )
}

export default Checkbox
