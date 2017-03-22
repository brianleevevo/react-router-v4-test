import { Component } from 'react'

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
    load(mod => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.props.children(this.state.mod);
  }
}

export default Bundle;
