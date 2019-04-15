import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

class EventList extends React.Component {
	constructor(props) {
		super(props);
	}

	onPress = event => {
		this.props.setSelectedEvent(event);
		this.props.expandCard();
		this.props.navigation.navigate("Links");
	};

	render() {
		const events = this.props.events;
		return events.map(event => (
			<View style={styles.container} key={event.key}>
				<TouchableOpacity
					style={styles.button}
					event={event}
					onPress={() => this.onPress(event)}
				>
					{event.Image && (
						<Image
							style={styles.eventImage}
							source={{ uri: event.Image }}
						/>
					)}
					<Text>{event.name}</Text>
					<Text>{"\n"}</Text>
				</TouchableOpacity>
			</View>
		));
	}
}

export default EventList;

const styles = StyleSheet.create({
	container: {
		width: "90%",
		alignSelf: "center",
		justifyContent: "center",
		color: "#fff",
		height: 70,
		marginBottom: 10,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 0,
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "#ddd",
		shadowColor: "#ccc",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
	},
	eventImage: {
		marginLeft: 10,
		marginRight: 10,
		flex: 0.2,
		height: "80%",
		borderRadius: 4,
	},
});
