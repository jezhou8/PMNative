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
			<View
				style={{
					justifyContent: "center",
					height: "80%",
					backgroundColor: "#fff",
				}}
			>
				<FlatList
					columnWrapperStyle={{ flexWrap: "wrap" }}
					contentContainerStyle={styles.listContainer}
					data={events}
					renderItem={event => {
						event = event.item;
						return (
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
												//source={{ uri: event.Image }}
												source={require("../../../img/photo.png")}
											/>
										)}
									</View>

									<View
										style={styles.eventDescriptionContainer}
									>
										<Text
											style={{
												color: "#fff",
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
						);
					}}
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
		width: 175,
		color: "#fff",
		height: 135,
		margin: 5,
	},
	listContainer: {
		alignSelf: "center",
		width: "100%",
	},
	button: {
		flex: 1,
		height: "100%",
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

	eventDescriptionContainer: {
		padding: 10,
		position: "absolute",
		bottom: 0,
	},
});
