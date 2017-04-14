import { PropTypes } from 'react';
import './Button.css';

const getButtonClassName = (className, type, isDisabled, isLoading) => {
  let buttonClassName = `button button-${type}`;
  if (isDisabled || isLoading)
    buttonClassName += ' button-loading';

  return buttonClassName;
};

const click = (e, isDisabled, isLoading, onClickFunc) => {
  if (!isDisabled && !isLoading && onClickFunc)
    onClickFunc(e);
};

const Button = ({
  className,
  type,
  htmlType,
  isDisabled,
  isLoading,
  loadingText,
  children,
  onClick
}) =>
  <button
    type={htmlType}
    className={getButtonClassName(className, type, isDisabled, isLoading)}
    onClick={e => click(e)}>
      {isLoading && loadingText ? loadingText : children}
  </button>;

Button.propTypes = {
  type: PropTypes.oneOf([ 'default', 'primary', 'secondary', 'link' ]),
  htmlType: PropTypes.oneOf([ 'button', 'submit' ]),
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.string,
  children: PropTypes.any,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'default',
  isDisabled: false,
  isLoading: false
};

export default Button;
