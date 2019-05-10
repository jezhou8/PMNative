import { connect } from "react-redux";
import EventMap from "../components/MapContainer";
import {
	setDefaultLocation,
	setSelectedEvent,
	expandCard,
	hideCard,
	rsvpToEvent,
} from "../../../redux/actions";
import EventsListCard from "../components/Card";

const mapStateToProps = state => {
	return {
		location: state.map,
		events: state.events,
		cardState: state.map.cardData,
		user: state.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setDefaultLocation: () => dispatch(setDefaultLocation()),
		setSelectedEvent: event => dispatch(setSelectedEvent(event)),
		expandCard: () => dispatch(expandCard()),
		hideCard: () => dispatch(hideCard()),
		rsvpToEvent: eventId => dispatch(rsvpToEvent(eventId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EventMap);
