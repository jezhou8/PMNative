import React from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	TouchableOpacity,
	ScrollView,
	ActionSheetIOS,
} from "react-native";
import { LinearGradient } from "expo";
import { RED, WHITE } from "../../Colors";

import image0 from "../../../img/photo-0.jpg";
import image1 from "../../../img/photo-1.jpg";
import image2 from "../../../img/photo-2.jpg";
import image3 from "../../../img/photo-3.jpg";
import profile2 from "../../../img/profile-2.jpg";
import profile3 from "../../../img/profile-3.jpg";
import profile4 from "../../../img/profile-4.jpg";
import profile5 from "../../../img/profile-5.jpg";
import { Icon } from "react-native-elements";

class EventList extends React.Component {
	constructor(props) {
		super(props);
	}

	onPress = event => {
		this.props.setSelectedEvent(event);
		this.props.expandCard();
		this.props.navigation.navigate("Links");
	};

	showOptions = event => {
		const options = ["Hide Event", "Cancel"];
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex: 1,
			},
			buttonIndex => {
				if (buttonIndex === 0) {
					this.props.filterEvent(event.name);
				}
			}
		);
	};

	generateRandomEventPicture = () => {
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
				<ScrollView contentContainerStyle={styles.listContainer}>
					{events.map(event => {
						return (
							<TouchableOpacity
								style={styles.button}
								key={event.key}
								event={event}
								onPress={() => this.onPress(event)}
							>
								{event.Image !=
								"https://facebook.github.io/react-native/docs/assets/favicon.png" ? (
									<Image
										style={styles.eventImage}
										source={{ uri: event.Image }}
									/>
								) : (
									<Image
										style={styles.eventImage}
										source={this.generateRandomEventPicture()}
									/>
								)}

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
											fontSize: 22,
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
											generateRandomProfilePicture = () => {
												let randNum = Math.floor(
													Math.random() *
														Math.floor(4)
												);
												switch (randNum) {
													case 0:
														return profile2;
													case 1:
														return profile3;
													case 2:
														return profile4;
													case 3:
														return profile5;

													default:
														return profile4;
												}
											};
											styles.attendeesImage = {
												...styles.attendeesImage,
												left: 10 + i * 15,
											};
											return (
												<Image
													key={person}
													style={
														styles.attendeesImage
													}
													source={this.generateRandomProfilePicture()}
													zIndex={
														event.attendees.length -
														i
													}
												/>
											);
										})}
								</View>
								<View
									style={{
										width: "20%",
										height: "20%",
										position: "absolute",
										top: 20,
										right: 0,
									}}
								>
									<TouchableOpacity
										style={{
											width: "100%",
											height: "100%",
											alignItems: "center",
											justifyContent: "center",
										}}
										onPress={() => this.showOptions(event)}
									>
										<Icon
											name='more-horiz'
											type='material'
											color='#fff'
										/>
									</TouchableOpacity>
								</View>
								{/* time badge */}
								<View style={styles.timeBadge}>
									<Text
										style={{
											color: WHITE,
											fontWeight: "bold",
											fontSize: 18,
										}}
									>
										Now
									</Text>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}

export default EventList;

const HEIGHT = 55;
var styles = StyleSheet.create({
	textColor: {
		color: "#FFFFFF",
	},
	attendees: { position: "absolute" },
	attendeesImage: {
		position: "absolute",
		width: HEIGHT,
		height: HEIGHT,
		borderRadius: HEIGHT / 2,
		borderWidth: 1,
		borderColor: WHITE,
		top: 10,
	},
	listContainer: {
		width: "100%",
		alignItems: "center",
	},
	button: {
		//flex: 1,
		aspectRatio: 4 / 3,
		width: "98%",
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
		paddingBottom: 20,
		paddingLeft: 15,
		position: "absolute",
		bottom: 0,
	},
	timeBadge: {
		backgroundColor: RED,
		alignSelf: "baseline",
		borderRadius: 3,
		position: "absolute",
		right: "7%",
		bottom: "10%",
		paddingRight: 5,
		paddingLeft: 5,
	},
});
