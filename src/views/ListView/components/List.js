import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo";
import { RED, WHITE } from "../../Colors";

import image0 from "../../../img/photo-0.png";
import image1 from "../../../img/photo-1.png";
import image2 from "../../../img/photo-2.png";
import image3 from "../../../img/photo-3.png";
import profile0 from "../../../img/profile-0.png";
import profile1 from "../../../img/profile-1.png";

class EventList extends React.Component {
	constructor(props) {
		super(props);
	}

	onPress = event => {
		this.props.setSelectedEvent(event);
		this.props.expandCard();
		this.props.navigation.navigate("Links");
	};

	generateRandomPicture = () => {
		let randNum = Math.floor(Math.random() * Math.floor(4));
		switch (randNum) {
			case 0:
				return image0;
			case 1:
				return image1;
			case 2:
				return image2;
			case 3:
				return image3;

			default:
				return image0;
		}
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
					columnWrapperStyle={{
						flex: 1,
						justifyContent: "space-evenly",
					}}
					contentContainerStyle={styles.listContainer}
					data={events}
					renderItem={event => {
						event = event.item;
						return (
							<TouchableOpacity
								style={styles.button}
								event={event}
								onPress={() => this.onPress(event)}
							>
								{
									<Image
										style={styles.eventImage}
										//source={{ uri: event.Image }}
										source={this.generateRandomPicture()}
									/>
								}

								<LinearGradient
									colors={["rgba(0,0,0,0.4)", "transparent"]}
									start={{ x: 0.0, y: 0.0 }}
									end={{ x: 0.7, y: 0.0 }}
									style={{
										position: "absolute",
										left: 0,
										right: 0,
										top: 0,
										height: "100%",
										borderRadius: 5,
									}}
								/>

								<View style={styles.eventDescriptionContainer}>
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

								{/* attendees profile images*/}
								<View style={styles.attendees}>
									{event.attendees
										.slice(0, 4)
										.map(function(person, i) {
											if (i == 3) {
												return (
													<Image
														key={person}
														style={{
															position:
																"absolute",
															left: i * 13,
															width: 64,
															height: 64,
														}}
														source={profile1}
														zIndex={
															event.attendees
																.length - i
														}
													/>
												);
											}
											return (
												<Image
													key={person}
													style={{
														position: "absolute",
														left: i * 12,
														width: 64,
														height: 64,
													}}
													source={profile0}
													zIndex={
														event.attendees.length -
														i
													}
												/>
											);
										})}
								</View>

								{/* time badge */}
								<View style={styles.timeBadge}>
									<Text
										style={{
											color: WHITE,
											fontWeight: "bold",
										}}
									>
										Now
									</Text>
								</View>
							</TouchableOpacity>
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
	attendees: { position: "absolute" },
	container: {
		width: "45%",
		color: "#fff",
		height: 150,
	},
	listContainer: {
		alignSelf: "center",
		width: "100%",
	},
	button: {
		//flex: 1,
		aspectRatio: 4 / 3,
		width: "48%",
		marginBottom: 5,
		// backgroundColor: "#f00",
		// borderColor: "#ddd",
	},
	eventImage: {
		alignSelf: "center",
		width: "100%",
		height: "100%",
		borderRadius: 5,
	},
	eventDescriptionContainer: {
		padding: 10,
		position: "absolute",
		bottom: 0,
	},
	timeBadge: {
		backgroundColor: RED,
		// width: 20,
		// height: 10,
		alignSelf: "baseline",
		borderRadius: 3,
		position: "absolute",
		right: "7%",
		bottom: "10%",
		paddingRight: 5,
		paddingLeft: 5,
	},
});
