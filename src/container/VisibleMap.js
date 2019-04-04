import {connect} from 'react-redux';
import EventMap from '../components/EventMap';
import {setDefaultLocation, expandCard} from '../actions';

const mapStateToProps = (state) =>{
    return {
      location: state.location,
      events: state.events,
      cardState: state.cardData,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      setDefaultLocation: () => dispatch(setDefaultLocation()),
      expandCard: () => dispatch(expandCard())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EventMap);