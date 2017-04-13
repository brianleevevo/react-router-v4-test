import './FormGroup.css';

const FormGroup = ({
  label,
  htmlFor,
  children
}) =>
  <div className="form-group">
    {
      label ?
        <label htmlFor={htmlFor}>{label}</label>
        : null
    }
    <div className="form-group-inner">
      {children}
    </div>
  </div>;

export default FormGroup;
