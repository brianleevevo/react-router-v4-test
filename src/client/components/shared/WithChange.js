import { Component } from 'react';

const withChange = Input =>
  class WithChange extends Component {
    timer = null
    state = {
      value: ''
    }

    componentDidMount() {
      const { value } = this.props;
      this.setState({ value });
    }

    componentWillReceiveProps(nextProps) {
      const { value } = this.props;
      const { value: nextValue } = nextProps;

      if (nextValue !== value)
        this.setState({ value: nextValue });
    }

    change(e) {
      const { onChange } = this.props;
      const { value } = e.target;

      this.setState({ value });

      if (this.timer)
        clearTimeout(this.timer);

      this.timer = setTimeout(() => onChange ? onChange(value) : null, 500);
    }

    blur(e) {
      const { onChange } = this.props;
      const { value } = e.target;
      if (onChange)
        onChange(value);
    }

    keyPress(e) {
      const { onChange } = this.props;
      const { value } = e.target;
      const code = e.keyCode ? e.keyCode : e.which;
      if (code == 13 && onChange)
        onChange(value);
    }

    render() {
      const { value } = this.state;
      return (
        <Input {...this.props} onChange={e => this.change(e)} onBlur={e => this.blur(e)} onKeyPress={e => this.keyPress(e)} value={value} />
      );
    }
  };

export default withChange;
