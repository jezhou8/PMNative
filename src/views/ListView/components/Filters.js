import React from "react";
import { View, Animated, Picker, Easing, StyleSheet } from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import { YELLOW } from "../../Colors";

class EventFilters extends React.Component {
	state = { category: "" };
	heightValue = new Animated.Value(1);

	updateCategory = category => {
		this.setState({ category: category });
	};

	animateHeader() {
		Animated.timing(
			// Animate over time
			this.heightValue, // The animated value to drive
			{
				toValue: !this.props.isHidden, // Animate to opacity: 1 (opaque)
				duration: 10, // Make it take a while
				easing: Easing.out(Easing.poly(2)),
			}
		).start(() => {});
	}

	componentDidUpdate(oldProps) {
		const newProps = this.props;
		if (oldProps.isHidden != newProps.isHidden) {
			console.log(newProps.isHidden);
			this.animateHeader();
		}
	}

	render() {
		const realHeight = this.heightValue.interpolate({
			inputRange: [0, 1],
			outputRange: ["0%", "5%"],
		});
		return (
			<Animated.View
				height={realHeight}
				horizontal={true}
				style={styles.filterBar}
			>
				<ModalDropdown
					defaultValue='Category'
					options={["Sports", "Nightlift", "Food"]}
					style={styles.filterButton}
					textStyle={styles.optionsTextStyle}
				/>
				<ModalDropdown
					defaultValue='Mood'
					options={["Sports", "Nightlift", "Food"]}
					style={styles.filterButton}
					textStyle={styles.optionsTextStyle}
				/>
				<ModalDropdown
					defaultValue='Time'
					options={["Sports", "Nightlift", "Food"]}
					style={styles.filterButton}
					textStyle={styles.optionsTextStyle}
				/>
				<ModalDropdown
					defaultValue='Distance'
					options={["Sports", "Nightlift", "Food"]}
					style={styles.filterButton}
					textStyle={styles.optionsTextStyle}
				/>
			</Animated.View>
		);
	}
}

export default EventFilters;

const styles = StyleSheet.create({
	filterBar: {
		flexDirection: "row",
		alignSelf: "center",
		margin: 5,
	},
	filterButton: {
		width: "20%",
		height: 30,
		borderRadius: 8,
		backgroundColor: YELLOW,
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 5,
		marginRight: 5,
		padding: 5,
	},
	headerText: {
		fontSize: 30,
		fontWeight: "bold",
	},
	optionsTextStyle: {
		fontSize: 15,
		color: "#fff",
	},
});
