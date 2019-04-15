import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CreateEventHeader = () => (
	<View style={styles.container}>
		<Text style={styles.headerText}>Create Event</Text>
	</View>
);

export default CreateEventHeader;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20,
		marginTop: 20,
	},
	headerText: {
		fontSize: 30,
		fontWeight: "bold",
	},
});
