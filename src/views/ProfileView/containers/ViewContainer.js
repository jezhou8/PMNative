import React from "react";
import { Animated, View, FlatList } from "react-native";
import ProfileHeader from "../components/Header";

class ViewContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<ProfileHeader />
			</View>
		);
	}
}

const styles = {
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	scrollViewContainer: {
		backgroundColor: "#f00",
	},
};

export default ViewContainer;
