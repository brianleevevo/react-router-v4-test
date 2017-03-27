import withChange from './WithChange';
import './TextBox.css';

const TextBox = props => <input className="form-control" {...props} />;
export default withChange(TextBox);
