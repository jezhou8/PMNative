import React from "react";
import {
	View,
	Animated,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
} from "react-native";

import { Icon, SearchBar } from "react-native-elements";
import { getStatusBarHeight } from "react-native-status-bar-height";
import profile2 from "../../../img/profile-4.jpg";
import friendsIcon from "../../../img/icon-friends.png";
import sunIcon from "../../../img/icon-sun.png";
import { LinearGradient } from "expo";
import { YELLOW, WHITE } from "../../Colors";

class ProfileHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient
					colors={["#FFEDBF", YELLOW]}
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 0.0, y: 1.0 }}
					style={styles.gradient}
				/>

				<Image source={profile2} style={styles.profileImage} />
				<Text style={styles.profileName}>John Zhou</Text>
				<View style={styles.stats}>
					<Image source={sunIcon} />
					<Text style={styles.statText}>200</Text>
					<Text style={styles.statText}>|</Text>
					<Image source={friendsIcon} />
					<Text style={styles.statText}>200</Text>
				</View>

				<View style={styles.profileNavigator}>
					<TouchableOpacity style={styles.navigationButton}>
						<Text style={styles.statText}>Profile</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navigationButton}>
						<Text style={styles.statText}>Kindline</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.navigationButton}>
						<Text style={styles.statText}>Bio</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

export default ProfileHeader;

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "50%",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: getStatusBarHeight(),
	},
	gradient: {
		width: "100%",
		left: 0,
		right: 0,
		top: getStatusBarHeight(),
		height: "100%",
		borderRadius: 5,
		position: "absolute",
	},
	profileImage: {
		width: 120,
		height: 120,
		borderRadius: 60,
		borderWidth: 2,
		borderColor: WHITE,
	},
	profileName: {
		fontSize: 34,
		color: WHITE,
		fontWeight: "bold",
	},
	profileNavigator: {
		position: "absolute",
		bottom: 10,
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	navigationButton: {
		width: "33.3%",
		alignItems: "center",
	},
	stats: {
		width: "40%",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	statText: {
		fontSize: 18,
		color: WHITE,
	},
});
