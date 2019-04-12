import {connect} from 'react-redux';
import EventMap from '../components/MapContainer';
import {setDefaultLocation, setSelectedEvent, expandCard, hideCard} from '../../../redux/actions';

const mapStateToProps = (state) =>{
    return {
      location: state.map,
      events: state.events,
      cardState: state.map.cardData,
    }
  }
  
const mapDispatchToProps = dispatch => {
    return {
      setDefaultLocation: () => dispatch(setDefaultLocation()),
      setSelectedEvent: (event) => dispatch(setSelectedEvent(event)),
      expandCard: () => dispatch(expandCard()),
      hideCard: () => dispatch(hideCard())
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(EventMap);