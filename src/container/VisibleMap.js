import {connect} from 'react-redux';
import EventMap from '../components/EventMap';
import {setDefaultLocation} from '../actions';

const mapStateToProps = (state) =>{
    return {
      location: state.location,
      events: state.events,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      setDefaultLocation: () => dispatch(setDefaultLocation())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EventMap);