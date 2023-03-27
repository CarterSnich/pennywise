import React, { useState } from "react";
import { Button, Text, ImageBackground, Image, View, TextInput, ToastAndroid } from "react-native";
import { BlurView } from "expo-blur";

import { appStyle } from "./../styles/styles";

function SignUpScreen({ navigation }) {
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

					<Text style={appStyle.h1}>Sign up to PennyWise</Text>

					{/* studentId */}
					<View style={appStyle.inputGroup}>
						<Text style={appStyle.text}>Student ID</Text>
						<TextInput
							value={studentId}
							style={appStyle.textInput}
							onChangeText={(text) => setstudentId(text)}
						/>
					</View>

					{/* password */}
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
						title="SIGN UP"
						style={appStyle.button}
						onPress={() => {
							let msg = `studentId: ${studentId}\nPassword: ${password}`;
							ToastAndroid.show(msg, ToastAndroid.SHORT);
						}}
					/>
				</View>
			</BlurView>
		</ImageBackground>
	);
}

export default SignUpScreen;
