import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../../screens/main-screen";
import PostScreen from "./../../screens/post-screen";
const Stack = createNativeStackNavigator();
const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={MainScreen} />
				<Stack.Screen name="Post" component={PostScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default Navigation;