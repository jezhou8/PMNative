import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import emoji from "emoji-dictionary";
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
		return (
			<View style={{ backgroundColor: "#aaa" }}>
				<FlatList
					data={events}
					renderItem={event => (
						<View style={styles.container} key={event.key}>
							<TouchableOpacity
								style={styles.button}
								event={event}
								onPress={() => this.onPress(event)}
							>
								<View style={styles.imageContainer}>
									{event.Image && (
										<Image
											style={styles.eventImage}
											source={{ uri: event.Image }}
										/>
									)}
								</View>

								<View style={styles.eventDescriptionContainer}>
									<Text
										style={{
											color: "#f9f9f9",
											fontWeight: "bold",
										}}
									>
										{event.name}
									</Text>
									<Text style={styles.textColor}>
										{"Grainger Library"}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					)}
					numColumns={2}
				/>
			</View>
		);
	}
}

export default EventList;

const styles = StyleSheet.create({
	textColor: {
		color: "#FFFFFF",
	},
	container: {
		width: "45%",
		alignSelf: "center",
		justifyContent: "center",
		color: "#fff",
		height: 100,
		marginBottom: 10,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		alignItems: "center",
		backgroundColor: "#fff",
		padding: 0,
		borderRadius: 2,
		borderWidth: 1,
		borderColor: "#ddd",
		shadowColor: "#ccc",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 1,
	},
	imageContainer: {
		width: "40%",
		height: "100%",
		justifyContent: "center",
	},
	eventImage: {
		aspectRatio: 4 / 3,
		height: "100%",
		borderRadius: 2,
		position: "absolute",
	},
	emojiContainer: {
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginLeft: 116,
		width: 30,
		height: 30,
		borderRadius: 20,
	},

	eventDescriptionContainer: {
		width: "55%",
		height: "100%",
		padding: 10,
	},
});
