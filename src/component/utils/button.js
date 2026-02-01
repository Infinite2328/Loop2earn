function Button({ label, className }) {
  return (
    <div className={className}>
      <div className="pad">{label}</div>
    </div>
  );
}

export default Button;
