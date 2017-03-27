import { FormGroup, TextBox, Button } from '../components/shared';

const ContactContainer = () =>
  <div>
    <h1>CONTACT US</h1>
    <FormGroup label="First Name">
      <TextBox value="John" placeholder="Enter First Name" />
    </FormGroup>
    <FormGroup label="Last Name">
      <TextBox value="Doe" placeholder="Enter Last Name" />
    </FormGroup>
    <FormGroup label="Email">
      <TextBox type="email" value="john@doe.com" placeholder="Enter Email" />
    </FormGroup>
    <div>
      <Button>Cancel</Button>
      <Button type="primary">Submit</Button>
    </div>
  </div>;

export default ContactContainer;
