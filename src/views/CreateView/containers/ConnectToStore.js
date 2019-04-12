import {connect} from 'react-redux';
import SimpleForm from '../components/Form';
import {createEvent, clearForm, onFormDataChange} from '../../../redux/actions';

const mapStateToProps = state => ({
    location: state.map,
    formData: state.formData
})

const mapDispatchToProps = dispatch => {
    return {
      createEvent: (newForm) => dispatch(createEvent(newForm)),
      onFormDataChange: (values) => dispatch(onFormDataChange(values)),
      clearForm: () => dispatch(clearForm()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleForm);