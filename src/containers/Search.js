import Search from '../components/Search';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { compose } from 'redux';

const selector = formValueSelector('search');

const mapStateToProps = state => {
  return {
    initialValues: {
      searchParameter: state.gifs.searchParameter
    },
    searchParameter: selector(state, 'searchParameter')
  }
}

const ConnectedSearch = compose(
  connect(mapStateToProps),
  reduxForm({
    form: 'search'
  })
)(Search);

export default ConnectedSearch;
