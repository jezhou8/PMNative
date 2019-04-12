import {connect} from 'react-redux';
import ViewContainer from '../components/ViewContainer';
import { setSelectedEvent, expandCard } from '../../../redux/actions';

const mapStateToProps = state => ({
        events: state.events
})

const mapDispatchToProps = dispatch => {
        return {
          setSelectedEvent: (event) => dispatch(setSelectedEvent(event)),
          expandCard: () => dispatch(expandCard()),
        }
    }
      

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);