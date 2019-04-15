import React from "react";
import { StyleSheet, View } from "react-native";

import CreateEventHeader from "./components/Header";
import VisibleForm from "./containers/ConnectToStore";

class SettingsScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	submit = values => {
		// print the form values to the console
		console.log(values);
	};

	render() {
		return (
			<View style={styles.container}>
				<CreateEventHeader />
				<VisibleForm />
			</View>
		);
	}
}

export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
