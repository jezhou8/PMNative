import React from "react";
import {
	View,
	Animated,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";

import image0 from "../../../img/photo-0.png";
import image1 from "../../../img/photo-1.png";
import image2 from "../../../img/photo-2.png";
import image3 from "../../../img/photo-3.png";
import { YELLOW, WHITE } from "../../Colors";

class Profile extends React.Component {
	constructor(props) {
		super(props);
	}

	onPress = event => {
		this.props.setSelectedEvent(event);
		this.props.expandCard();
		this.props.navigation.navigate("Links");
	};

	render() {
		console.log(this.props.user);
		let hasEvents = this.props.user.eventsAttended.length > 0;
		return (
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
			>
				{hasEvents &&
					this.props.user.eventsAttended.map((event, i) => {
						// TODO :  fix key

						return (
							<View style={styles.eventContainer} key={i}>
								<TouchableOpacity
									style={styles.button}
									event={event}
									onPress={() => this.onPress(event)}
								>
									<View
										style={{
											width: "20%",
											backgroundColor: YELLOW,
											justifyContent: "center",
											alignItems: "center",
										}}
									>
										<Text
											style={{
												color: WHITE,
												fontSize: 15,
											}}
										>
											May
										</Text>
										<Text
											style={{
												color: WHITE,
												fontSize: 34,
											}}
										>
											9
										</Text>
									</View>

									<View>
										<Text
											style={{
												marginTop: 10,
												marginLeft: 10,
												fontSize: 18,
											}}
										>
											{event.name}
										</Text>
										<Text
											style={{
												marginTop: 10,
												marginLeft: 10,
												fontSize: 13,
											}}
										>
											1301 W Springfield Ave, Urbana, IL
											61801
										</Text>
									</View>
								</TouchableOpacity>
							</View>
						);
					})}
				{!hasEvents && (
					<Text style={{ color: "black" }}>no rsvp'd events</Text>
				)}
			</ScrollView>
		);
	}
}

export default Profile;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "55%",
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10,
	},
	eventContainer: {
		width: "95%",
		justifyContent: "center",
		color: "#fff",
		height: 80,
		marginTop: 5,
		marginBottom: 10,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		height: "100%",
		//alignItems: "center",
		backgroundColor: "#fff",
		borderRadius: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	eventImage: {
		aspectRatio: 1,
		height: "80%",
		borderRadius: 4,
		alignSelf: "center",
		marginLeft: 10,
	},
});
