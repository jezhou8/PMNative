import { connect } from "react-redux";
import ViewContainer from "../components/ViewContainer";
import {
	setSelectedEvent,
	expandCard,
	filterEvent,
} from "../../../redux/actions";

const mapStateToProps = state => ({
	events: state.events,
});

const mapDispatchToProps = dispatch => {
	return {
		setSelectedEvent: event => dispatch(setSelectedEvent(event)),
		expandCard: () => dispatch(expandCard()),
		filterEvent: eventName => dispatch(filterEvent(eventName)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ViewContainer);
