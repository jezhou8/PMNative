import React from "react";
import {
	View,
	Animated,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import { getStatusBarHeight } from "react-native-status-bar-height";
import profile2 from "../../../img/profile-4.jpg";

class EventHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	onPress = () => {
		this.props.navigation.navigate("Profile");
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={() => this.onPress()}
					style={styles.profileImage}
				>
					<Image
						style={{
							width: "100%",
							height: "100%",
							borderRadius: 5,
						}}
						source={profile2}
					/>
				</TouchableOpacity>
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
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		backgroundColor: "#fff",
		borderBottomWidth: 1,
		borderColor: "#ccc",
		paddingTop: getStatusBarHeight(),
	},
	profileImage: {
		aspectRatio: 1,
		width: "10%",
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
		padding: 0,
		width: "85%",
	},
});
