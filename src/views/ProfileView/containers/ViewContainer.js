import React from "react";
import { Animated, View, FlatList, ScrollView } from "react-native";
import ProfileHeader from "../components/Header";
import Profile from "../components/Profile";

class ViewContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<ProfileHeader user={this.props.user} />
				<Profile user={this.props.user} />
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
