import { useState } from "react";
import { Button, Text, TextInput, View, Image, ToastAndroid, ImageBackground, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";

import { appStyle } from "./../styles/styles";

function LoginScreen({ navigation }) {
	const [studentId, setstudentId] = useState("");
	const [password, setPassword] = useState("");

	return (
		<ImageBackground
			source={require("./../assets/bg-pennywise.jpg")}
			style={appStyle.background}
		>
			<BlurView
				intensity={100}
				tint="light"
				style={appStyle.blur}
			>
				<View style={appStyle.container}>
					<Image
						source={require("./../assets/favicon.png")}
						style={appStyle.image}
					/>

					<Text style={appStyle.h1}>Log in to PennyWise</Text>

					<View style={appStyle.inputGroup}>
						<Text style={appStyle.text}>Student ID</Text>
						<TextInput
							value={studentId}
							style={appStyle.textInput}
							onChangeText={(text) => setstudentId(text)}
						/>
					</View>
					<View style={appStyle.inputGroup}>
						<Text style={appStyle.text}>Password</Text>
						<TextInput
							value={password}
							style={appStyle.textInput}
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>
					</View>
					<Button
						title="LOG IN"
						style={appStyle.button}
						onPress={() => {
							let msg = `studentId: ${studentId}\nPassword: ${password}`;
							ToastAndroid.show(msg, ToastAndroid.SHORT);

							navigation.navigate("Main");
						}}
					/>

					<View style={appStyle.signUp}>
						<Text>No account yet? </Text>
						<TouchableOpacity>
							<Text
								style={{ color: "blue" }}
								onPress={() => {
									navigation.navigate("SignUp");
								}}
							>
								Sign up here
							</Text>
						</TouchableOpacity>
						<Text>.</Text>
					</View>
				</View>
			</BlurView>
		</ImageBackground>
	);
}

export default LoginScreen;
