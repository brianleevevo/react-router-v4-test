import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  TextBox,
  Button
} from '../components/shared';
import * as Actions from 'actions/RegisterActions';
import { registerSelector } from 'selectors/Register';
import './RegisterContainer.css';

class RegisterContainer extends Component {
  componentWillMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const {
      isSaving,
      data,
      validation,
      onChange,
      onSubmit
    } = this.props;

    return (
      <div className="register-container">
        <div className="register-form-container">
          <h1>Register</h1>
          <Form onSubmit={() => onSubmit(data)}>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.email)} errorMessage={validation.errors.email}>
              <TextBox id="email" type="email" placeholder="Email Address" autoComplete="off" value={data.email} onChange={email => onChange({ email })} />
            </FormGroup>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.firstName)} errorMessage={validation.errors.firstName}>
              <TextBox id="firstname" placeholder="First Name" value={data.firstName} autoComplete="off" onChange={firstName => onChange({ firstName })} />
            </FormGroup>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.lastName)} errorMessage={validation.errors.lastName}>
              <TextBox id="lastname" placeholder="Last Name" value={data.lastName} autoComplete="off" onChange={lastName => onChange({ lastName })} />
            </FormGroup>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.username)} errorMessage={validation.errors.username}>
              <TextBox id="username" placeholder="Username" value={data.username} autoComplete="off" onChange={username => onChange({ username })} />
            </FormGroup>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.password)} errorMessage={validation.errors.password}>
              <TextBox id="password" type="password" placeholder="Password" onChange={password => onChange({ password })} />
            </FormGroup>
            <FormGroup hasError={Boolean(validation.hasError && validation.errors.confirmPassword)} errorMessage={validation.errors.confirmPassword}>
              <TextBox id="confirm-password" type="password" placeholder="Confirm Password" onChange={confirmPassword => onChange({ confirmPassword })} />
            </FormGroup>
            <div className="buttons">
              <Button type="primary" htmlType="submit" isLoading={isSaving} loadingText="Registering">Register</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => registerSelector(state);

const mapDispatchToProps = dispatch => ({
  onMount: () => dispatch(Actions.clear()),
  onChange: updateProp => dispatch(Actions.change(updateProp)),
  onSubmit: user => dispatch(Actions.register(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
