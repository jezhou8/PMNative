import React from "react";
import { View } from "react-native";
import EventsListCard from "./Card";
import Map from "./Map";
import EventsSearch from "./SearchBar";

const EventMap = props => {
	const {
		location,
		events,
		setDefaultLocation,
		cardState,
		expandCard,
		hideCard,
		setSelectedEvent,
	} = props;
	return (
		<View style={styles.container}>
			<Map
				location={location}
				setSelectedEvent={setSelectedEvent}
				expandCard={expandCard}
				events={events}
				setDefaultLocation={setDefaultLocation}
			/>
			<EventsListCard
				events={events}
				expandCard={expandCard}
				hideCard={hideCard}
				cardState={cardState}
			/>
		</View>
	);
};

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#c0c0c0",
	},
};

export default EventMap;
