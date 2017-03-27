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
        this.setState({ nextValue });
    }

    change(e) {
      const { onUpdate } = this.props;
      const { value } = e.target;

      this.setState({ value });

      if (this.timer)
        clearTimeout(this.timer);

      this.timer = setTimeout(() => onUpdate ? onUpdate(value) : null, 500);
    }

    render() {
      const { value } = this.state;
      return (
        <Input {...this.props} onChange={e => this.change(e)} value={value} />
      );
    }
  };

export default withChange;
