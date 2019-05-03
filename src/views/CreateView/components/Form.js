import React, { Component } from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import ImageFactory from "./ImageFactory";

import t from "tcomb-form-native";
import { YELLOW } from "../../Colors";

var _ = require("lodash");

const Form = t.form.Form;

const Event = t.struct({
	EventName: t.String,
	EventLocation: t.maybe(t.String),
	Mood: t.maybe(t.String),
	StartTime: t.Date,
	EndTime: t.Date,
	Image: t.maybe(t.String),
});

const formStyles = _.cloneDeep(t.form.Form.stylesheet);
formStyles.textbox.normal.marginBottom = 20;
formStyles.textbox.normal.fontSize = 17;
formStyles.textbox.normal.backgroundColor = "#fff";
formStyles.textbox.normal.color = "#454F63";
formStyles.textbox.normal.height = 30;
formStyles.textbox.normal.borderWidth = 0;
formStyles.textbox.normal.borderBottomWidth = 1;
formStyles.dateTouchable.normal.borderWidth = 1;
formStyles.dateTouchable.normal.alignSelf = "flex-start";

formStyles.textbox.error.marginBottom = 20;
formStyles.textbox.error.fontSize = 17;
formStyles.textbox.error.backgroundColor = "#454F63";
formStyles.textbox.error.color = "#ffffff";
formStyles.textbox.error.height = 50;

const placeholderTextColor = "#959DAD";
const styles = StyleSheet.create({
	container: {
		margin: 20,
		backgroundColor: "#ffffff",
	},
	createEventButton: {
		alignItems: "center",
		marginRight: 40,
		marginLeft: 40,
		marginTop: 10,
		paddingTop: 10,
		paddingBottom: 10,
		backgroundColor: "#007AFF",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#fff",
		backgroundColor: YELLOW,
	},
});

export default class SimpleForm extends Component {
	getDefaultStartTime() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes() + 5;

		if (minutes >= 60) {
			minutes = minutes % 60;
			hours++;
		}
		minutes = minutes < 10 ? "0" + minutes : minutes;

		var ampm;
		if (hours >= 24) {
			hours = hours % 24;
			ampm = "am";
		} else {
			ampm = hours >= 12 ? "pm" : "am";

			hours = hours % 12;
		}
		hours = hours ? hours : 12; // the hour '0' should be '12'
		var strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}
	getDefaultEndTime() {
		var date = new Date();
		var hours = date.getHours() + 2;
		var minutes = date.getMinutes() + 5;

		if (minutes >= 60) {
			minutes = minutes % 60;
			hours++;
		}
		minutes = minutes < 10 ? "0" + minutes : minutes;

		var ampm;
		if (hours >= 24) {
			hours = hours % 24;
			ampm = "am";
		} else {
			ampm = hours >= 12 ? "pm" : "am";

			hours = hours % 12;
		}
		hours = hours ? hours : 12; // the hour '0' should be '12'
		var strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}
	options = {
		auto: "placeholders",
		stylesheet: formStyles,

		fields: {
			// <= Event options
			EventName: {
				placeholderTextColor: placeholderTextColor,
			},
			EventLocation: {
				placeholderTextColor: placeholderTextColor,
			},
			Mood: {
				placeholderTextColor: placeholderTextColor,
			},
			Requests: {
				placeholderTextColor: placeholderTextColor,
			},
			Image: {
				config: {
					title: "Select image",
					options: ["Open Camera", "Select from gallery", "Cancel"],
					// Used on Android to style BottomSheet
					style: {
						titleFontFamily: "Roboto",
					},
					//onChange: thisp
				},
				error: "No image provided",
				factory: ImageFactory,
			},
			StartTime: {
				config: {
					defaultValueText: this.getDefaultStartTime(),
					format: date => {
						let hour = date.getHours();
						let timeOfDay = hour > 12 ? "PM" : "AM";
						hour = hour % 12;
						let minutes = date.getMinutes();
						return String(hour + ":" + minutes + " " + timeOfDay);
					},
				},
				mode: "time",
				label: "Start Time",
			},
			EndTime: {
				config: {
					defaultValueText: this.getDefaultEndTime(),
					format: date => {
						let hour = date.getHours();
						let timeOfDay = hour > 12 ? "PM" : "AM";
						hour = hour % 12;
						let minutes = date.getMinutes();
						return String(hour + ":" + minutes + " " + timeOfDay);
					},
				},
				mode: "time",
				label: "End Time",
			},
		},
	};

	formatDate(date) {
		console.log(date);
		return String(date);
	}

	constructor(props) {
		super(props);
	}

	handleSubmit(data) {
		data = {
			...data,
			latitude: this.props.location.coords.latitude,
			longitude: this.props.location.coords.longitude,
		};
		this.props.createEvent(data);
		this.props.clearForm();
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<Form
						ref={c => (this._form = c)}
						type={Event}
						value={this.props.formData}
						onChange={this.props.onFormDataChange}
						options={this.options}
					/>
					<TouchableOpacity
						title='Create!'
						onPress={() => this.handleSubmit(this.props.formData)}
						style={styles.createEventButton}
					>
						<Text style={{ color: "#fff" }}>Create Event</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}
