/* @flow */

import React from "react";
import {
	ActionSheetIOS,
	View,
	Text,
	Image,
	Animated,
	StyleSheet,
	Platform,
	TouchableOpacity,
} from "react-native";
import { ImagePicker } from "expo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import t from "tcomb-form-native";
import BottomSheet from "react-native-js-bottom-sheet";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

type Props = {
	title: string,
};
type State = {
	image: ?string,
};

const Component = t.form.Component;
const { Location, Permissions } = Expo;

class ImageFactory extends Component<Props, State> {
	bottomSheet: BottomSheet;

	constructor(props: Props) {
		super(props);
		this.state = {
			image: undefined,
			height: new Animated.Value(0),
			overflow: "visible",
		};
	}

	_getImageAsync = async opt => {
		// permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
		if (opt === 0) {
			const { status, permissions } = await Permissions.askAsync(
				Permissions.CAMERA,
				Permissions.CAMERA_ROLL
			);
			if (status === "granted") {
				let result = await ImagePicker.launchCameraAsync({
					allowsEditing: true,
					aspect: [4, 3],
				});
				if (!result.cancelled) {
					this._getImageFromStorage(result.uri);
				}
			} else {
				throw new Error("Camera permission not granted");
			}
		}
		if (opt === 1) {
			const { status, permissions } = await Permissions.askAsync(
				Permissions.CAMERA_ROLL,
				Permissions.CAMERA
			);
			if (status === "granted") {
				let result = await ImagePicker.launchImageLibraryAsync({
					allowsEditing: true,
					aspect: [4, 3],
				});
				if (!result.cancelled) {
					this._getImageFromStorage(result.uri);
				}
			} else {
				throw new Error("Camera Library permission not granted");
			}
		}
	};

	_onPressImage = () => {
		const options = this.props.options.config.options || [
			"Open camera",
			"Select from the gallery",
			"Cancel",
		];
		ActionSheetIOS.showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex: 2,
			},
			(buttonIndex: number) => {
				if (buttonIndex === 0) {
					this._getImageAsync(0);
				} else if (buttonIndex === 1) {
					this._getImageAsync(1);
				}
			}
		);
	};

	shouldComponentUpdate(nextProps: Props, nextState: State) {
		return true;
	}

	_startAnimation = () => {
		Animated.sequence([
			Animated.timing(this.state.height, {
				toValue: 0,
				duration: 250,
			}),
			Animated.timing(this.state.height, {
				toValue: 150,
				duration: 500,
				delay: 75,
			}),
		]).start();
	};

	_renderOptions = (): Array<Object> => {
		const options = this.props.options.config.options || [
			"Open camera",
			"Select from the gallery",
			"Cancel",
		];

		return [
			{
				title: options[0],
				onPress: () =>
					this._getImageAsync(0) && this.bottomSheet.close(),
				icon: (
					<MaterialIcons
						name={"photo-camera"}
						size={24}
						style={styles.icon}
					/>
				),
			},
			{
				title: options[1],
				onPress: () =>
					this._getImageAsync(1) && this.bottomSheet.close(),
				icon: (
					<MaterialIcons
						name={"photo-library"}
						size={24}
						style={styles.icon}
					/>
				),
			},
		];
	};

	_getImageFromStorage = (path: string) => {
		this.setState({ image: path });
		super.getLocals().onChange(path);
	};

	getTemplate() {
		return (locals: Object) => {
			const stylesheet = locals.stylesheet;
			let formGroupStyle = stylesheet.formGroup.normal;
			let controlLabelStyle = stylesheet.controlLabel.normal;
			let textboxStyle = stylesheet.textbox.normal;
			let helpBlockStyle = stylesheet.helpBlock.normal;
			let errorBlockStyle = stylesheet.errorBlock;
			let topContainer = stylesheet.imagePicker
				? stylesheet.imagePicker.topContainer
				: styles.topContainer;
			let container = stylesheet.imagePicker
				? stylesheet.imagePicker.container
				: styles.container;
			let cameraColor =
				locals.config && locals.config.cameraColor
					? locals.config.cameraColor
					: "#333";
			let buttonTextColor =
				locals.config && locals.config.buttonTextColor
					? locals.config.buttonTextColor
					: "#fff";

			if (locals.hasError) {
				controlLabelStyle = stylesheet.controlLabel.error;
				formGroupStyle = stylesheet.formGroup.error;
				textboxStyle = stylesheet.textbox.error;
				helpBlockStyle = stylesheet.helpBlock.error;
			}

			const style: Object = this.props.options.config.style || {};
			return (
				<View style={this.props.options.config.containerStyle || {}}>
					{locals.label ? (
						<Text
							style={[
								controlLabelStyle,
								locals.error ? { color: "#a94442" } : {},
							]}
						>
							{locals.label}
						</Text>
					) : null}
					<View
						style={[
							topContainer,
							locals.hasError ? { borderColor: "#a94442" } : {},
						]}
					>
						<Animated.Image
							resizeMode='cover'
							source={{
								uri: this.state.image,
							}}
							style={[
								styles.image,
								{
									height: this.state.height,
								},
							]}
						/>

						<TouchableOpacity
							style={[
								{ overflow: this.state.overflow },
								container,
								locals.hasError
									? { backgroundColor: "#E28E8E" }
									: {},
							]}
							onPress={
								Platform.OS === "ios"
									? this._onPressImage
									: () => this.bottomSheet.open()
							}
						>
							{super.getLocals().value && (
								<Image
									source={{ uri: super.getLocals().value }}
									style={{ width: 200, height: 200 }}
								/>
							)}
							<SimpleLineIcons
								name={"camera"}
								size={28}
								style={styles.icon}
								color={cameraColor}
							/>
							<Text>Tap here to add pictures</Text>
						</TouchableOpacity>
					</View>
					{locals.help || locals.config.help ? (
						<Text style={helpBlockStyle}>
							{locals.help || locals.config.help}
						</Text>
					) : null}
					{Platform.OS === "android" ? (
						<BottomSheet
							ref={(ref: any) => {
								this.bottomSheet = ref;
							}}
							title={locals.config.title}
							options={this._renderOptions()}
							coverScreen={true}
							titleFontFamily={style.titleFontFamily}
							styleContainer={style.styleContainer}
							fontFamily={style.fontFamily}
						/>
					) : null}
				</View>
			);
		};
	}
}

const styles = StyleSheet.create({
	topContainer: {
		overflow: "hidden",
		borderRadius: 4,
		marginBottom: 12,
		height: 150,
		borderColor: "grey",
		borderWidth: 1,
	},
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#e6e6e6",
		height: 100,
		borderRadius: 4,
	},
	icon: {
		textAlign: "center",
		textAlignVertical: "center",
	},
	image: {
		height: 150,
	},
	selectImageButton: {
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
	},
});

export default ImageFactory;
