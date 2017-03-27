const FormGroup = ({
  label,
  htmlFor,
  children
}) =>
  <div className="form-group">
    <label htmlFor={htmlFor}>{label}</label>
    <div className="form-group-inner">
      {children}
    </div>
  </div>;

export default FormGroup;
