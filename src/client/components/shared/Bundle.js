import { Component } from 'react'
import Loader from './Loader';

const Default = () => <div />;

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  }

  componentWillMount() {
    this.loadComponent(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load)
      this.loadComponent(nextProps);
  }

  loadComponent({ load }) {
    this.setState({ mod: null });
    load.then(mod => this.setState({ mod: mod.default }));
    /*load(mod => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });*/
  }

  render() {
    return this.props.children(this.state.mod ? this.state.mod : Default );
  }
}

export default Bundle;
