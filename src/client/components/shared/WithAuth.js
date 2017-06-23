import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({ });
const mapDispatchToProps = dispatch => ({
  onRedirect: () => dispatch(push('/login'))
})

export default WrapperComponent =>
  connect(mapStateToProps, mapDispatchToProps)(
    class WithAuth extends Component {
      componentDidMount() {
        const { roles, onRedirect } = this.props;

        if (roles && Array.isArray(roles) && roles.length > 0)
          onRedirect();
      }

      render() {
        return <WrapperComponent {...this.props} />;
      }
    }
  );
