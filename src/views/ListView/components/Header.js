import React from "react";
import {
	View,
	Animated,
	StyleSheet,
	Easing,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";

class EventHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					lightTheme
					placeholder='Search'
					inputContainerStyle={styles.searchInputContainer}
					containerStyle={styles.searchBarContainer}
				/>
			</View>
		);
	}
}

export default EventHeader;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "12%",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderColor: "#ccc",
		zIndex: 5,
		paddingTop: 20,
		top: 0,
		left: 0,
		right: 0,
	},
	searchInputContainer: {
		borderWidth: 0,
		borderRadius: 10,
		backgroundColor: "#eee",
	},
	searchBarContainer: {
		backgroundColor: "transparent",
		borderBottomColor: "transparent",
		borderTopColor: "transparent",
		width: "90%",
	},
	filterBarContent: {
		justifyContent: "flex-start",
	},
	filterBar: {
		height: "60%",
		flexDirection: "row",
		marginTop: 2,
		marginLeft: 5,
	},
	filterButton: {
		height: 30,
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#ddd",
		borderRadius: 8,
		padding: 5,
		marginRight: 5,
		backgroundColor: "#fff",
	},
	headerText: {
		fontSize: 30,
		fontWeight: "bold",
	},
	button: {
		alignItems: "center",
		backgroundColor: "#FFFFFF",
		padding: 10,
	},
	countContainer: {
		alignItems: "center",
		padding: 10,
	},
	countText: {
		color: "#FF00FF",
	},
});
