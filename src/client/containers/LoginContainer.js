import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Form,
  FormGroup,
  TextBox,
  Button
} from '../components/shared';
import { loginSelector } from 'selectors/Login';
import * as Actions from 'actions/LoginActions';
import './LoginContainer.css';

const LoginContainer = ({
  isSaving,
  data: {
    username,
    password
  },
  validation: {
    hasErrors,
    errors
  },
  onSubmit,
  onChange
}) =>
  <div className="login-container">
    <div>
      <Form onSubmit={() => onSubmit(username, password)}>
        <FormGroup hasError={Boolean(hasErrors && errors.username)} errorMessage={errors.username}>
          <TextBox id="username" placeholder="Username" value={username} onChange={text => onChange({ username: text })} />
        </FormGroup>
        <FormGroup hasError={Boolean(hasErrors && errors.password)} errorMessage={errors.password}>
          <TextBox id="password" type="password" placeholder="Password" value={password} onChange={text => onChange({ password: text })} />
        </FormGroup>
        <div className="buttons">
          <Button type="primary" htmlType="submit" isLoading={isSaving} loadingText="Logging In">Login</Button>
        </div>
      </Form>
      <p className="register-container">
        <span>Dont have an account?</span>
        <Link to="/register">Sign up</Link>
      </p>
    </div>
  </div>;

const mapStateToProps = state => loginSelector(state);

const mapDispatchToProps = dispatch => ({
  onSubmit: (username, password) => dispatch(Actions.login(username, password)),
  onChange: updateProp => dispatch(Actions.change(updateProp))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
