import {connect} from 'react-redux';
import EventList from '../components/List';

const mapStateToProps = state => ({
        events: state.events
})

export default connect(mapStateToProps)(EventList);