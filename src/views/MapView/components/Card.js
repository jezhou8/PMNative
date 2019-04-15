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

class EventsListCard extends React.Component {
	constructor(props) {
		super(props);
	}

	styles = {
		container: {
			flex: 1,
			flexDirection: "column",
			width: "100%",
			padding: 0,
			margin: 0,
			position: "absolute",
			justifyContent: "flex-start",
			bottom: 0,
			borderTopLeftRadius: 15,
			borderTopWidth: 1,
			borderColor: "#ddd",
			borderTopRightRadius: 15,
			shadowColor: "#ccc",
			shadowOffset: { width: 0, height: -2 },
			shadowOpacity: 0.5,
			shadowRadius: 2,
			backgroundColor: "#fff",
		},
		selectedEvent: {
			backgroundColor: "#fff",
			margin: 0,
			padding: 0,
		},
		expandCardArea: {
			backgroundColor: "#fff",
			width: "100%",
			height: "100%",
			padding: 10,
			margin: 0,
			borderTopLeftRadius: 8,
			borderTopRightRadius: 8,
			borderColor: "#ddd",
			justifyContent: "flex-start",
		},
		button: {
			flexGrow: 1,
			flexDirection: "row",
			alignSelf: "center",
			width: "100%",
			height: 60,
			alignItems: "center",
			backgroundColor: "#fff",
			padding: 0,
			borderColor: "#ddd",
		},
		eventImage: {
			marginLeft: 10,
			marginRight: 10,
			flex: 0.2,
			height: "80%",
			borderRadius: 4,
		},
		rsvpButton: {
			alignSelf: "center",
			paddingLeft: 50,
			paddingRight: 50,
			paddingTop: 20,
			paddingBottom: 20,
			borderRadius: 8,
			borderColor: "#000",
			borderWidth: 1,
		},
		eventDescription: {
			borderWidth: 1,
			borderRadius: 8,
			borderColor: "#000",
			marginTop: 10,
			marginBottom: 10,
		},
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
			outputRange: ["0%", "45%"],
		});

		let { selectedEvent } = this.props.cardState;
		return (
			<Animated.View height={realHeight} style={this.styles.container}>
				{selectedEvent && (
					<TouchableOpacity
						activeOpacity={0.5}
						style={this.styles.expandCardArea}
						onPress={this.onPress}
					>
						<Icon name='ios-remove' type='ionicon' color='#ccc' />
						<View style={this.styles.selectedEvent}>
							<TouchableOpacity
								key={selectedEvent.key}
								style={this.styles.button}
								onPress={() => {}}
							>
								{selectedEvent.Image && (
									<Image
										style={this.styles.eventImage}
										source={{ uri: selectedEvent.Image }}
									/>
								)}
								<Text>{selectedEvent.name}</Text>
								<Text>{"\n"}</Text>
							</TouchableOpacity>
							<View style={this.styles.eventDescription}>
								<Text style={{ padding: 10 }}>
									Id vel populo scriptorem, modus assentior ne
									nec. Regione salutandi scripserit ut mea.
									Duis reque percipitur ius cu, in vix eros
									molestie, mundi splendide sed cu.
								</Text>
							</View>
							<TouchableOpacity style={this.styles.rsvpButton}>
								<Text>RSVP</Text>
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				)}
			</Animated.View>
		);
	}
}

export default EventsListCard;
