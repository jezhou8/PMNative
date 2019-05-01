import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { YELLOW } from "../../Colors";
import { getStatusBarHeight } from "react-native-status-bar-height";

const CreateEventHeader = () => (
	<View style={styles.container}>
		<View style={styles.header}>
			<Icon
				name='calendar'
				type='font-awesome'
				size={30}
				color={YELLOW}
			/>
			<Text style={styles.headerText}>Create Event</Text>
		</View>
		<Text style={styles.subHeadText}>
			Fill Out Information below about your Event
		</Text>
	</View>
);

export default CreateEventHeader;

const styles = StyleSheet.create({
	container: {
		//alignItems: "center",
		//justifyContent: "space-between",
		padding: 20,
		paddingTop: 10 + getStatusBarHeight(),
		borderBottomWidth: 1,
	},
	header: {
		alignItems: "center",
		flexDirection: "row",
	},
	headerText: {
		marginLeft: 10,
		fontSize: 34,
		fontWeight: "bold",
	},
	subHeadText: {
		fontSize: 15,
	},
});
