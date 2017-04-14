import { PropTypes } from 'react';
import './FormGroup.css';

const FormGroup = ({
  label,
  htmlFor,
  hasError,
  errorMessage,
  children
}) =>
  <div className={`form-group${hasError ? ' form-group-error' : ''}`}>
    {
      label ?
        <label htmlFor={htmlFor}>{label}</label>
        : null
    }
    <div className="form-group-inner">
      {children}
    </div>
    {
      hasError && errorMessage ?
        <div className="form-group-info">{errorMessage}</div>
        : null
    }
  </div>;

FormGroup.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
}

FormGroup.defaultProps = {
  hasError: false
}

export default FormGroup;
