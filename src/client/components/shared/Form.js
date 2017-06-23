import { PropTypes } from 'react';

const submit = (e, onSubmitFunc) => {
  e.preventDefault();
  e.stopPropagation();
  onSubmitFunc();
};

const Form = ({ className, children, onSubmit }) =>
  <form className={className} onSubmit={e => submit(e, onSubmit)}>
    {children}
  </form>;

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onSubmit: PropTypes.func
};

export default Form;
