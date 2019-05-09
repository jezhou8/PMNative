import React from "react";
import { Platform } from "react-native";
import {
	createStackNavigator,
	createBottomTabNavigator,
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../src/views/ListView/ListView";
import LinksScreen from "../src/views/MapView/MapView";
import SettingsScreen from "../src/views/CreateView/CreateView";
import ProfileView from "../src/views/ProfileView/ProfileView";

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: "Browse",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === "ios"
					? `ios-information-circle${focused ? "" : "-outline"}`
					: "md-information-circle"
			}
		/>
	),
};

const LinksStack = createStackNavigator({
	Links: LinksScreen,
});

LinksStack.navigationOptions = {
	tabBarLabel: "Map",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? "ios-link" : "md-link"}
		/>
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: "Create",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? "ios-options" : "md-options"}
		/>
	),
};

const ProfileStack = createStackNavigator({ Profile: ProfileView });
ProfileStack.navigationOptions = {
	tabBarLabel: "Profile",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === "ios" ? "ios-options" : "md-options"}
		/>
	),
};

export default createBottomTabNavigator({
	HomeStack,
	LinksStack,
	SettingsStack,
	ProfileStack,
});
