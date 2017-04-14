import { connect } from 'react-redux';
import {
  FormGroup,
  TextBox,
  Button
} from '../components/shared';
import './RegisterContainer.css';

const submitForm = e => {
  e.preventDefault();
  e.stopPropagation();
};

const RegisterContainer = ({
  isSaving,
  user
}) =>
  <div className="register-container">
    <div>
      <form onSubmit={e => submitForm(e)}>
        <FormGroup>
          <TextBox id="email" type="email" placeholder="Email Address" />
        </FormGroup>
        <FormGroup>
          <TextBox id="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <TextBox id="password" type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <TextBox id="confirm-password" type="password" placeholder="Confirm Password" />
        </FormGroup>
        <div className="buttons">
          <Button type="primary" htmlType="submit">Register</Button>
        </div>
      </form>
    </div>
  </div>;

const mapStateToProps = state => state.register.toJS();

const mapDispatchToProps = dispatch => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
