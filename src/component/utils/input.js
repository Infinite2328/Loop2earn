export default function CustomInput(props) {
  const { label, placeholder, type } = props;
  return (
    <div className="custom-input">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}
