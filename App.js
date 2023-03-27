import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar, SafeAreaView } from "react-native";

import SplashScreen from "./screens/SplashScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MainScreen from "./screens/MainScreen";

const Stack = createStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar
				backgroundColor="#ffffff"
				barStyle="dark-content"
			/>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Splash"
							component={SplashScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="SignUp"
							component={SignUpScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Main"
							component={MainScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</>
	);
}
