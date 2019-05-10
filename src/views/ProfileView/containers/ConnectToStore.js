import { connect } from "react-redux";
import ViewContainer from "./ViewContainer.js";
import {
	setDefaultLocation,
	setSelectedEvent,
	expandCard,
	hideCard,
	rsvpToEvent,
} from "../../../redux/actions";

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
		rsvp: eventId => dispatch(rsvpToEvent(eventId)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewContainer);
