import './Button.css';

const Button = ({
  type,
  htmlType,
  children,
  onClick
}) =>
  <button type={htmlType} className={`button button-${type}`} onClick={e => onClick ? onClick(e) : e}>{children}</button>;

Button.defaultProps = {
  type: 'default'
};

export default Button;
