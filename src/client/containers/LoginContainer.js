import { Link } from 'react-router-dom';
import {
  FormGroup,
  TextBox,
  Button
} from '../components/shared';
import './LoginContainer.css';

const submitForm = e => {
  e.preventDefault();
  e.stopPropagation();
};

const LoginContainer = () =>
  <div className="login-container">
    <div>
      <form onSubmit={e => submitForm(e)}>
        <FormGroup>
          <TextBox id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <TextBox id="password" type="password" placeholder="Password" />
        </FormGroup>
        <div className="buttons">
          <Button type="primary" htmlType="submit">Login</Button>
        </div>
      </form>
      <p className="register-container">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  </div>;

export default LoginContainer;
