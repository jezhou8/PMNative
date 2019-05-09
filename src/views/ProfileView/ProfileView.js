import React from "react";
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import VisibleProfile from "./containers/ConnectToStore";

export default class ProfileView extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return <VisibleProfile navigation={this.props.navigation} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#fff",
	},
	contentContainer: {
		alignItems: "center",
		justifyContent: "center",
	},
});
