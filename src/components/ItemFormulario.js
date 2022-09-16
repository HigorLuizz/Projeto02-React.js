export default function ItemFormulario({
  label,
  placeholder,
  value,
  name,
  setInfo,
  colnumber
}) {
  return (
    <div className={colnumber}>
      <label className="form-label">{label}</label>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
            setInfo(prev => ({
                ...prev,
                [name]: e.target.value,
              }))}}
      />
    </div>
  );
}
