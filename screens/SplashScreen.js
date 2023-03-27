import { ImageBackground, ProgressBarAndroid, Image } from "react-native";

import { splashStyle } from "./../styles/styles";

function SplashScreen({ navigation }) {
	setTimeout(() => {
		navigation.navigate("Login");
	}, 3000);

	return (
		<ImageBackground
			source={require("./../assets/bg-pennywise.jpg")}
			style={splashStyle.container}
		>
			<Image
				source={require("./../assets/favicon.png")}
				style={splashStyle.image}
			/>
			<ProgressBarAndroid
				styleAttr="Horizontal"
				style={splashStyle.progress}
			/>
		</ImageBackground>
	);
}

export default SplashScreen;
