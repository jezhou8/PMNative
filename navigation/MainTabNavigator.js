import React from "react";
import { Platform } from "react-native";
import {
	createStackNavigator,
	createBottomTabNavigator,
} from "react-navigation";

import HomeScreen from "../src/views/ListView/ListView";
import LinksScreen from "../src/views/MapView/MapView";
import SettingsScreen from "../src/views/CreateView/CreateView";
import ProfileView from "../src/views/ProfileView/ProfileView";
import { Icon } from "react-native-elements";
import { YELLOW, GRAY } from "../src/views/Colors";

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: "Browse",
	tabBarOptions: {
		activeTintColor: YELLOW,
		inactiveTintColor: GRAY,
	},
	tabBarIcon: ({ focused }) => (
		<Icon
			color={focused ? YELLOW : GRAY}
			name='date-range'
			type='material'
		/>
	),
};

const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: "Map",
	tabBarOptions: {
		activeTintColor: YELLOW,
		inactiveTintColor: GRAY,
	},
	tabBarIcon: ({ focused }) => (
		<Icon color={focused ? YELLOW : GRAY} name='map' type='material' />
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: "Create",
	tabBarOptions: {
		activeTintColor: YELLOW,
		inactiveTintColor: GRAY,
	},
	tabBarIcon: ({ focused }) => (
		<Icon color={focused ? YELLOW : GRAY} name='create' type='material' />
	),
};

const ProfileStack = createStackNavigator({ Profile: ProfileView });
ProfileStack.navigationOptions = {
	tabBarLabel: "Profile",
	tabBarOptions: {
		activeTintColor: YELLOW,
		inactiveTintColor: GRAY,
	},
	tabBarIcon: ({ focused }) => (
		<Icon color={focused ? YELLOW : GRAY} name='person' type='material' />
	),
};

export default createBottomTabNavigator({
	HomeStack,
	LinksStack,
	SettingsStack,
	ProfileStack,
});
