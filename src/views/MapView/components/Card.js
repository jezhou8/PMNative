import React from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
	Animated,
	Easing,
	TouchableHighlight,
	TextInput,
} from "react-native";
import { Icon, Divider } from "react-native-elements";
import profile2 from "../../../img/profile-2.jpg";
import chatIcon from "../../../img/icon-chat.png";
import { YELLOW, WHITE, GRAY } from "../../Colors";
import image0 from "../../../img/photo-0.png";
import image1 from "../../../img/photo-1.png";
import image2 from "../../../img/photo-2.png";
import image3 from "../../../img/photo-3.png";
import iconAttending from "../../../img/icon-attending.png";
class EventsListCard extends React.Component {
	constructor(props) {
		super(props);
	}

	profileImages = [image0, image1, image2, image3];

	styles = {
		buttonContainer: {
			height: "10%",
			width: "100%",
			flexDirection: "row",
			justifyContent: "space-evenly",
		},
		chatButton: {
			flex: 0.2,
			backgroundColor: YELLOW,
			borderRadius: 8,
			justifyContent: "center",
			alignItems: "center",
		},
		wrapper: {
			flex: 1,
			flexDirection: "column",
			width: "100%",
			position: "absolute",
			bottom: 0,
			borderTopLeftRadius: 15,
			borderTopWidth: 1,
			borderColor: "#ddd",
			borderTopRightRadius: 15,
			backgroundColor: WHITE,
		},
		collapseCardButton: {
			width: "100%",
			height: "50%",
			padding: 10,
			borderTopLeftRadius: 8,
			borderTopRightRadius: 8,
			borderColor: "#ddd",
			justifyContent: "flex-start",
		},
		eventName: {
			fontSize: 22,
		},
		profileButton: {
			flexDirection: "row",
			alignSelf: "center",
			width: "100%",
			height: "30%",
			alignItems: "center",
			backgroundColor: "#fff",
			padding: 0,
			borderColor: "#ddd",
			justifyContent: "space-evenly",
		},
		profileImage: {
			marginLeft: 10,
			marginRight: 10,
			height: "100%",
			width: undefined,
			aspectRatio: 1,
			borderRadius: 4,
		},
		rsvpButton: {
			flex: 0.7,
			alignItems: "center",
			justifyContent: "center",
			//height: "100%",
			borderRadius: 8,
			backgroundColor: YELLOW,
		},
		eventDescription: {
			flex: 1,
			marginTop: 10,
		},
		eventImage: {
			aspectRatio: 4 / 3,
			height: "100%",
			width: undefined,
			alignSelf: "stretch",
			marginRight: 5,
			borderRadius: 8,
		},
		attendingIcon: {},
	};

	heightValue = new Animated.Value(this.props.cardState.newCardHeight);

	onPress = () => {
		console.log("hide");
		this.props.hideCard();
		this.animateCard();
	};

	animateCard() {
		Animated.timing(
			// Animate over time
			this.heightValue, // The animated value to drive
			{
				toValue: this.props.cardState.newCardHeight, // Animate to opacity: 1 (opaque)
				duration: 200, // Make it take a while
				easing: Easing.out(Easing.poly(2)),
			}
		).start();
	}

	componentDidUpdate(oldProps) {
		const newProps = this.props;
		console.log(newProps.cardState.selectedEvent);

		if (
			newProps.cardState.selectedEvent != oldProps.cardState.selectedEvent
		) {
			console.log("propsUpdated");
			if (this.heightValue != 1) {
				this.props.expandCard();
				this.animateCard();
				return;
			}
		}
		if (
			newProps.cardState.newCardHeight != oldProps.cardState.newCardHeight
		) {
			this.animateCard();
		}
	}

	render() {
		const realHeight = this.heightValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["0%", "60%"],
		});

		let { selectedEvent } = this.props.cardState;
		return (
			<Animated.View height={realHeight} style={this.styles.wrapper}>
				{selectedEvent && (
					<View style={{ width: "100%", height: "100%" }}>
						<TouchableOpacity
							activeOpacity={0.5}
							style={this.styles.collapseCardButton}
							onPress={this.onPress}
						>
							<Icon
								name='ios-remove'
								type='ionicon'
								color='#ccc'
							/>

							{/* Profile images*/}
							<TouchableOpacity
								key={selectedEvent.key}
								style={this.styles.profileButton}
								onPress={() => {}}
							>
								<Image
									style={this.styles.profileImage}
									source={profile2}
								/>

								<View style={{ width: "60%" }}>
									<Text style={this.styles.eventName}>
										{selectedEvent.name}
									</Text>
									<View
										style={{
											alignSelf: "baseline",
											borderTopWidth: 1,
										}}
									>
										<Text
											style={{
												color: "#000",
											}}
										>
											206 E. Peabody Dr, Champaign IL
										</Text>
									</View>
								</View>

								<Image
									style={this.styles.attendingIcon}
									source={iconAttending}
								/>
							</TouchableOpacity>
							<View style={this.styles.eventDescription}>
								<Text style={{ fontSize: 17, padding: 10 }}>
									Id vel populo scriptorem, modus assentior ne
									nec. Regione salutandi scripserit ut mea.
									Duis reque percipitur ius cu, in vix eros
									molestie, mundi splendide sed cu.
								</Text>
							</View>
						</TouchableOpacity>

						{/* Button container */}
						<View style={this.styles.buttonContainer}>
							<TouchableOpacity style={this.styles.rsvpButton}>
								<Text
									style={{
										fontSize: 17,
										fontWeight: "bold",
										color: WHITE,
									}}
								>
									RSVP
								</Text>
							</TouchableOpacity>
							<TouchableOpacity style={this.styles.chatButton}>
								<Image source={chatIcon} />
							</TouchableOpacity>
						</View>

						{/* Event images*/}
						<ScrollView
							horizontal
							style={{
								display: "flex",
								paddingLeft: 12,
								paddingTop: 10,
								paddingBottom: 10,

								height: "30%",
							}}
							contentContainerStyle={{
								height: "100%",
								overflow: "scroll",
							}}
						>
							<Image
								style={this.styles.eventImage}
								source={image0}
							/>
							<Image
								style={this.styles.eventImage}
								source={image1}
							/>
							<Image
								style={this.styles.eventImage}
								source={image2}
							/>
							<Image
								style={this.styles.eventImage}
								source={image3}
							/>
						</ScrollView>
					</View>
				)}
			</Animated.View>
		);
	}
}

export default EventsListCard;
